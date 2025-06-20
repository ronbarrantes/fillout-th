import React from "react";

import {
  closestCorners,
  DndContext,
  type DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import classNames from "classnames";

import { Icon } from "@/components/icon";
import { Button as ButtonPrimitive } from "@/components/ui/button";
import { generateId } from "./lib/id";

type CustomButton = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  iconClassName?: string;
};

const AddPageButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <ButtonPrimitive
      onClick={onClick}
      className={classNames(
        "!m-0 h-fit w-fit !rounded-full border !border-slate-300/60 !bg-white !p-0 text-sm !text-black",
        "hover:!border-slate-400 hover:!outline-none focus:!outline-none"
      )}
    >
      <Icon name="add" className="m-0 size-4 p-0.5" />
      <span className="sr-only">Add a page</span>
    </ButtonPrimitive>
  );
};

const Button = React.forwardRef<HTMLButtonElement, CustomButton>(
  ({ style, children, iconClassName, className, onClick }, ref) => {
    return (
      <ButtonPrimitive
        ref={ref}
        style={style}
        onClick={onClick}
        className={classNames(
          "group flex gap-2 !rounded-sm border !bg-gray-100 !p-4 !pl-3 !text-sm !text-slate-500 !shadow-none",
          "hover:!border-transparent hover:!bg-gray-200 hover:!text-slate-600",
          "focus:!border-blue-400 focus:!bg-white focus:!text-black focus:!ring-2 focus:!ring-gray-300/60 focus:!outline-none",
          "active:!ring-none focus:!shadow-sm active:!border-gray-300/60 active:!bg-white active:!ring-0",
          className
        )}
      >
        <Icon
          className={classNames(
            "m-0 size-5 p-0",
            "group-focus:text-amber-500",
            iconClassName
          )}
          name="info"
        />
        {children}
      </ButtonPrimitive>
    );
  }
);

Button.displayName = "Button";

const DraggableListItem = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  return (
    <li
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transition,
        transform: CSS.Transform.toString(transform),
      }}
    >
      {children}
    </li>
  );
};

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden border border-red-500">
      <Nav />
    </div>
  );
}

const defaultPages = [
  { id: generateId(), name: "Info" },
  { id: generateId(), name: "Details" },
  { id: generateId(), name: "Other" },
];

type Page = {
  id: string;
  name: string;
};

const useDrag = () => {
  const [pages, setPages] = React.useState<Page[]>(defaultPages);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over?.id) return;

    const oldIndex = pages.findIndex((page) => page.id === active.id);
    const newIndex = pages.findIndex((page) => page.id === over?.id);

    const updatedPages = Array.from(pages);
    const [movedPage] = updatedPages.splice(oldIndex, 1);
    updatedPages.splice(newIndex, 0, movedPage);

    setPages(updatedPages);
  };

  const handleAddPage = (currPageId?: string) => {
    const newPage = { id: generateId(), name: `Page ${pages.length + 1}` };
    if (currPageId) {
      const index = pages.findIndex((page) => page.id === currPageId);
      if (index !== -1) {
        setPages((prev) => [
          ...prev.slice(0, index + 1),
          newPage,
          ...prev.slice(index + 1),
        ]);
        return;
      }
    }
    setPages((prev) => [...prev, newPage]);
  };

  return {
    pages,
    handleDragEnd,
    handleAddPage,
  };
};

const Nav = () => {
  const { pages, handleDragEnd, handleAddPage } = useDrag();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    })
  );

  return (
    <DndContext
      collisionDetection={closestCorners}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={pages.map((page) => page.id)}
        strategy={horizontalListSortingStrategy}
      >
        <ul className="gap flex w-full border border-green-500 p-5">
          {pages.map((page, idx) => (
            <React.Fragment key={page.id}>
              <DraggableListItem id={page.id}>
                <Button
                  onClick={() => console.log(`Clicked ${page.name}`)}
                  className="w-full"
                >
                  {page.name}
                </Button>
              </DraggableListItem>
              {idx !== pages.length - 1 && (
                <li className="flex items-center">
                  <AddPageButton onClick={() => handleAddPage(page.id)} />
                </li>
              )}
            </React.Fragment>
          ))}
          <li>
            <Button onClick={() => handleAddPage()}>Add Page</Button>
          </li>
        </ul>
      </SortableContext>
    </DndContext>
  );
};

export default App;
