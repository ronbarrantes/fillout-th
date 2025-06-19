import React from "react";

import {
  DndContext,
  type DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
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

const LiItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="flex items-center">{children}</li>;
};

const DraggableItem = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  return (
    <Button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
      }}
      className="rounded bg-blue-200 px-3 py-1"
    >
      {children}
    </Button>
  );
};

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden border border-red-500">
      <Nav />
    </div>
  );
}

const DroppableItem = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { setNodeRef } = useDroppable({ id });

  return <div ref={setNodeRef}>{children}</div>;
};

const defaultPages = [
  { id: generateId(), name: "Home" },
  { id: generateId(), name: "About" },
  { id: generateId(), name: "Contact" },
];

type Page = {
  id: string;
  name: string;
};

const Nav = () => {
  const [pages, setPages] = React.useState<Page[]>(defaultPages);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = pages.findIndex((page) => page.id === active.id);
      const newIndex = pages.findIndex((page) => page.id === over?.id);

      const updatedPages = Array.from(pages);
      const [movedPage] = updatedPages.splice(oldIndex, 1);
      updatedPages.splice(newIndex, 0, movedPage);

      setPages(updatedPages);
    }
  };

  const addPage = () => {
    const newPage = { id: generateId(), name: `Page ${pages.length + 1}` };
    setPages((prev) => [...prev, newPage]);
  };

  const handleAddPage = () => {
    addPage();
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <ul className="gap flex w-full border border-green-500 p-5">
        {pages.map((page, idx) => (
          <LiItem key={page.id}>
            <DroppableItem id={page.id}>
              <DraggableItem id={page.id}>{page.name}</DraggableItem>
            </DroppableItem>
            {idx !== pages.length - 1 && (
              <li className="flex items-center">
                <AddPageButton onClick={handleAddPage} />
              </li>
            )}
          </LiItem>
        ))}
        <li>
          <Button onClick={handleAddPage}>Add Page</Button>
        </li>
      </ul>
    </DndContext>
  );
};

export default App;
