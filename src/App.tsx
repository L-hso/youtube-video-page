import { useState } from "react";
import { Navbar } from "./components/Navbar/NavbarWidget";
import { Main } from "./components/MainContent/Widget";

function App() {
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <div className="w-screen h-screen">
      <Navbar.Root
        menuVisibility={menuVisibility}
        toggleMenuVisibility={setMenuVisibility}
      >
        <Navbar.SearchBar/>
      </Navbar.Root>
      <Navbar.Aside visible={menuVisibility} />
    <Main.Root><></></Main.Root>
    </div>
  );
}

export default App;
