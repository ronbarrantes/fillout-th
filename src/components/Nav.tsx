import React from "react";

import {
  closestCorners,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

import { useDrag } from "@/hooks/useDrag";
import { AddPageButton, AddPageButtonIcon, Button } from "./Buttons";
import { DraggableListItem } from "./DragableListItem";

export const Nav = ({ className }: { className: string }) => {
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
        <ul className={className}>
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
                  <AddPageButtonIcon onClick={() => handleAddPage(page.id)} />
                </li>
              )}
            </React.Fragment>
          ))}
          <li>
            <AddPageButton onClick={() => handleAddPage()} />
          </li>
        </ul>
      </SortableContext>
    </DndContext>
  );
};
