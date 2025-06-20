import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const DraggableListItem = ({
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
