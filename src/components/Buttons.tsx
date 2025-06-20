import React from "react";

import classNames from "classnames";

import { Icon } from "@/components/icon";
import { Button as ButtonPrimitive } from "@/components/ui/button";

type CustomButton = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  iconClassName?: string;
};

export const AddPageButtonIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <ButtonPrimitive
      onClick={onClick}
      className={classNames(
        "group !m-0 !w-0 !border-none !bg-transparent !p-3 text-sm !text-black shadow-none",
        "hover:!px-8",
        "focus:!outline-none"
      )}
    >
      <Icon
        name="add"
        className={classNames(
          "hidden transition-all",
          "m-0 size-0 rounded-full border border-slate-300/60 bg-white p-0.5 group-hover:size-4.5",
          "group-hover:flex group-hover:shadow-sm group-hover:!outline-none hover:!border-slate-400"
        )}
      />

      <span className="sr-only">Add page</span>
    </ButtonPrimitive>
  );
};

export const AddPageButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <ButtonPrimitive
      onClick={onClick}
      className="group ml-6 flex gap-2 !rounded-md border !border-slate-300/60 !bg-white !p-4 !pl-3 text-sm !text-black hover:!border-slate-400 hover:shadow-sm hover:!outline-none focus:!outline-none"
    >
      <Icon name="add" className="m-0 size-5 p-0 group-hover:text-amber-500" />
      <span>Add page</span>
    </ButtonPrimitive>
  );
};

export const Button = ({
  style,
  children,
  iconClassName,
  className,
  onClick,
}: CustomButton) => {
  return (
    <ButtonPrimitive
      style={style}
      onClick={onClick}
      className={classNames(
        "group flex gap-2 !rounded-md border !bg-gray-100 !p-4 !pl-3 !text-sm !text-slate-500 !shadow-none",
        "hover:!border-transparent hover:!bg-gray-200 hover:!text-slate-600",
        "focus:!border-blue-400 focus:!bg-white focus:!text-black focus:!ring-2 focus:!ring-gray-300/60 focus:!outline-none",
        "active:!ring-none focus:!shadow-sm active:!border-gray-300/60 active:!bg-white active:!pr-3 active:!ring-0",
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
      <Icon name="more" className="hidden group-active:block" />
    </ButtonPrimitive>
  );
};
