import { Info } from "lucide-react";

import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";

const Nav = () => {
  //<Icon className="m-0 h-0 w-0 p-0" name="add" />
  return (
    <ul className="gap flex w-full border border-green-500">
      <li>
        <Button>Button 1</Button>
      </li>
      <li className="flex items-center border-4 border-blue-500">
        <Button className="!m-0 h-fit w-fit !rounded-full !p-0 text-white">
          <Icon name="add" className="m-0 h-0 w-0 p-0" />
          <span className="sr-only">Add a page</span>
        </Button>
        <Info />
      </li>
      <li>
        <Button>Button 2</Button>
      </li>
      <li>
        <Button>Button 3</Button>
      </li>
      <li>
        <Button>Button 4</Button>
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
