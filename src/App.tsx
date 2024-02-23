import { useState } from "react";
import { Navbar } from "./components/Navbar/NavbarWidget";
import { Main } from "./components/MainContent/Widget";

function App() {
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <>
      <Navbar.Root
        menuVisibility={menuVisibility}
        toggleMenuVisibility={setMenuVisibility}
      >
        <Navbar.SearchBar/>
      </Navbar.Root>
      <Navbar.Aside visible={menuVisibility} />
    <Main.Root><></></Main.Root>
    </>
  );
}

export default App;
