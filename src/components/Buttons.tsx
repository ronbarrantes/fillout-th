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

export const AddPageButton = ({
  mode = "icon",
  onClick,
}: {
  onClick: () => void;
  mode?: "icon" | "label";
}) => {
  return (
    <ButtonPrimitive
      onClick={onClick}
      className={classNames(
        "border !border-slate-300/60 !bg-white text-sm !text-black hover:!border-slate-400 hover:shadow-sm hover:!outline-none focus:!outline-none",
        mode === "icon" && "!m-0 h-fit w-fit !rounded-full !p-0",
        mode === "label" && "group flex gap-2 !rounded-md !p-4 !pl-3"
      )}
    >
      <Icon
        name="add"
        className={classNames(
          "m-0",
          mode === "icon" && "size-4 p-0.5",
          mode === "label" && "size-5 p-0 group-hover:text-amber-500"
        )}
      />
      <span className={classNames(mode === "icon" && "sr-only")}>Add page</span>
    </ButtonPrimitive>
  );
};

//  COMPONENTS Button
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
