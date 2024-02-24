import { useState } from "react";
import { Navbar } from "./components/Navbar/NavbarWidget";
import { Main } from "./components/MainContent/Widget";

function App() {
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <>
    <header>
      <Navbar.Root
        menuVisibility={menuVisibility}
        toggleMenuVisibility={setMenuVisibility}
      >
        <Navbar.SearchBar/>
        <Navbar.Notification/> 
      </Navbar.Root>
      <Navbar.Aside visible={menuVisibility} />
    </header>
    <Main.Root visible={menuVisibility}><></></Main.Root>
    </>
  );
}

export default App;
