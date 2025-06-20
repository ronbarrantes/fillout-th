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
    <div className={classNames("group flex h-full items-center")}>
      <span className="w-5 border-t-2 border-dashed border-gray-300">
        {/*spacer*/}
      </span>
      <ButtonPrimitive
        onClick={onClick}
        className={classNames(
          "m-0 hidden size-0 w-0 !rounded-full !border !border-slate-300/60 !bg-white !p-0.5 !text-black",
          "group-hover:flex group-hover:size-4.5 group-hover:shadow-sm group-hover:!outline-none hover:!border-slate-300"
        )}
      >
        <Icon name="add" className={classNames()} />
        <span className="sr-only">Add page</span>
      </ButtonPrimitive>
      <span className="hidden w-5 border-t-2 border-dashed border-gray-300 group-hover:flex">
        {/*spacer*/}
      </span>
    </div>
  );
};

export const AddPageButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={classNames("flex h-full items-center")}>
      <span className="w-5 border-t-2 border-dashed border-gray-300">
        {/*spacer*/}
      </span>
      <ButtonPrimitive
        onClick={onClick}
        className="group flex gap-2 !rounded-md border !border-slate-300/60 !bg-white !p-4 !pl-3 text-sm !text-black hover:!border-slate-400 hover:shadow-sm hover:!outline-none focus:!outline-none"
      >
        <Icon
          name="add"
          className="m-0 size-5 p-0 group-hover:text-amber-500"
        />
        <span>Add page</span>
      </ButtonPrimitive>
    </div>
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
