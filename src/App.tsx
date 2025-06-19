import classNames from "classnames";

import { Icon } from "@/components/icon";
import { Button as ButtonPrimitive } from "@/components/ui/button";

type CustomButton = {
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
};

const AddPageButton = () => {
  return (
    <ButtonPrimitive
      className={classNames(
        "!m-0 h-fit w-fit !rounded-full border !border-slate-300/60 !bg-white !p-0 text-sm !text-black",
        "hover:!border-slate-400 hover:!outline-none focus:!outline-none"
      )}
    >
      <Icon name="add" className="m-0 size-4 p-0.5" />
      <span className="sr-only">Add a page</span>
    </ButtonPrimitive>
  );
};

const Button = ({ children, iconClassName }: CustomButton) => {
  return (
    <ButtonPrimitive
      className={classNames(
        "group flex gap-2 !rounded-sm border !bg-gray-100 !p-4 !pl-3 !text-sm !text-slate-500 !shadow-none",
        "hover:!border-transparent hover:!bg-gray-200 hover:!text-slate-600",
        "focus:!border-blue-400 focus:!bg-white focus:!text-black focus:!ring-2 focus:!ring-gray-300/60 focus:!outline-none",
        "active:!ring-none focus:!shadow-sm active:!border-gray-300/60 active:!bg-white active:!ring-0",
        classNames
      )}
    >
      {/* <Icon className="m-0 size-5 p-0 group-hover:text-amber-500" name="info" /> */}
      <Icon
        className={classNames(
          "m-0 size-5 p-0",
          "group-focus:text-amber-500",
          iconClassName
        )}
        name="info"
      />
      {children}
    </ButtonPrimitive>
  );
};

const Nav = () => {
  //<Icon className="m-0 h-0 w-0 p-0" name="add" />
  return (
    <ul className="gap flex w-full border border-green-500 p-5">
      <li>
        <Button>Other</Button>
      </li>
      <li className="flex items-center">
        <AddPageButton />
      </li>
      <li>
        <Button>Info</Button>
      </li>
      <li className="flex items-center">
        <AddPageButton />
      </li>
      <li>
        <Button>Button 3</Button>
      </li>
      <li className="flex items-center">
        <AddPageButton />
      </li>
      <li>
        <Button>Button 4</Button>
      </li>
      <li className="flex items-center">
        <AddPageButton />
      </li>
      <li>
        <Button>Button 5</Button>
      </li>
    </ul>
  );
};

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden border border-red-500">
      <Nav />
    </div>
  );
}

export default App;
