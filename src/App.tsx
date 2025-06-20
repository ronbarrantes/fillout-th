import { Nav } from "@/components/Nav";

function App() {
  return (
    <div className="m-auto flex h-full w-full max-w-screen-xl items-center justify-center overflow-hidden overflow-x-auto">
      <Nav className="gap flex min-w-full px-4 py-5 after:border after:border-amber-50 after:content-['']" />
    </div>
  );
}

export default App;
