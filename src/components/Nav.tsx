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
import classNames from "classnames";

import {
  AddPageButton,
  AddPageButtonIcon,
  DraggableButton,
} from "@/components/Buttons";
import { DraggableListItem } from "@/components/DragableListItem";
import { Icon } from "@/components/icon";
import { PopoverSettings } from "@/components/PopoverSettings";
import { useDrag } from "@/hooks/useDrag";

/*
 * Nav component
 * This component renders a navigation bar with draggable pages.
 * It uses the `DndContext` and `SortableContext` from `@dnd-kit/core` to manage drag-and-drop functionality.
 */
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
          {pages.map((page, idx) => {
            const isLast = idx === pages.length - 1;
            return (
              <React.Fragment key={page.id}>
                <DraggableListItem id={page.id}>
                  {({ ref, listeners, attributes, style }) => (
                    <PopoverSettings>
                      <DraggableButton
                        ref={ref}
                        style={style}
                        {...listeners}
                        {...attributes}
                        className="w-fit"
                      >
                        <Icon
                          className={classNames(
                            "m-0 size-5 p-0",
                            "group-focus:text-amber-500"
                          )}
                          name={isLast ? "check" : "info"}
                        />
                        {page.name}
                        <Icon
                          name="more"
                          className="hidden group-active:block"
                        />
                      </DraggableButton>
                    </PopoverSettings>
                  )}
                </DraggableListItem>
                {idx !== pages.length - 1 && (
                  <li className="flex items-center">
                    <AddPageButtonIcon onClick={() => handleAddPage(page.id)} />
                  </li>
                )}
              </React.Fragment>
            );
          })}
          <li>
            <AddPageButton onClick={() => handleAddPage()} />
          </li>
        </ul>
      </SortableContext>
    </DndContext>
  );
};
