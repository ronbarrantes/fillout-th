import React from "react";

import { type DragEndEvent } from "@dnd-kit/core";

import { generateId } from "@/lib/id";

type Page = {
  id: string;
  name: string;
};

const defaultPages = [
  { id: generateId(), name: "Info" },
  { id: generateId(), name: "Details" },
  { id: generateId(), name: "Other" },
];

/**
 * useDrag hook
 * This hook manages the state of draggable pages.
 * It provides functionality to handle drag and drop events, add new pages, and maintain the order of pages.
 */
export const useDrag = () => {
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
