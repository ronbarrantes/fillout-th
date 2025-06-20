import classNames from "classnames";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { iconFileNames, type IconsLisType } from "./icons-list-files";

type IconProps = {
  name: IconsLisType;
  tooltip?: boolean;
  className?: string;
  asChild?: boolean;
};

export const Icon = ({
  tooltip = false,
  asChild = false,
  name,
  className,
  ...props
}: IconProps) => {
  const ComponentToRender = iconFileNames[name].icon;
  const comp = (
    <ComponentToRender {...props} className={classNames(className)} />
  );

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild={asChild}>{comp}</TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return comp;
};
