import { PopoverButton } from "@/components/Buttons";
import { Icon } from "@/components/icon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

/**
 * PopoverSettings component
 * This component renders a popover with settings options for a page.
 * It uses the `Popover`, `PopoverTrigger`, and `PopoverContent` components from the UI library.
 */
export const PopoverSettings = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-54 p-0">
        <div className="grid gap-2">
          <div className="">
            <h4 className="m-0 p-4 text-lg leading-none font-medium">
              Settings
            </h4>
            <Separator />
            <PopoverButton className="w-full justify-start border">
              <Icon name="flag" className="size-5 text-blue-500" />
              <span>Set as first page</span>
            </PopoverButton>
            <PopoverButton className="w-full justify-start">
              <Icon name="edit" className="size-5" />
              <span>Rename</span>
            </PopoverButton>
            <PopoverButton className="w-full justify-start">
              <Icon name="copy" className="size-5" />
              <span>Copy</span>
            </PopoverButton>
            <PopoverButton className="w-full justify-start">
              <Icon name="duplicate" className="size-5 rotate-90" />
              <span>Duplicate</span>
            </PopoverButton>
            <Separator />
            <PopoverButton className="w-full justify-start rounded-2xl py-4">
              <Icon name="delete" className="size-5 text-red-500" />
              <span className="text-red-500">Delete</span>
            </PopoverButton>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
