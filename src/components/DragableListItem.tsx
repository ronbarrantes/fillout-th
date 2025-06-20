import React from "react";

import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

/**
 *  DraggableListItem component
 *  This component is used to create a draggable list item that can be sorted.
 *  It uses the `useSortable` hook from `@dnd-kit/sortable` to manage the drag-and-drop functionality.
 */
export const DraggableListItem = ({
  id,
  children,
}: {
  id: string;
  children: (props: {
    ref: React.Ref<HTMLButtonElement> | undefined;
    listeners: SyntheticListenerMap | undefined;
    attributes: React.HTMLAttributes<HTMLElement>;
    style: React.CSSProperties;
  }) => React.ReactNode;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return <li>{children({ ref: setNodeRef, listeners, attributes, style })}</li>;
};
