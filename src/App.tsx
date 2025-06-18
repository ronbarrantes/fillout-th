import { Button } from "@/components/ui/button";

const Nav = () => {
  return (
    <ul className="border border-green-500">
      <li>
        <Button>My Button</Button>
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
