import { useState } from "react";
import { Navbar } from "./components/Navbar/NavbarWidget";
import { Main } from "./components/MainContent/Widget";
import { NavbarUser } from "./components/Navbar/NavbarUser/Widget";

function App() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [userVisibility, setUserVisibility] = useState("none");
  return (
    <>
      <header>
        <Navbar.Root
          menuVisibility={menuVisibility}
          toggleMenuVisibility={setMenuVisibility}
        >
          <Navbar.SearchBar />
          <NavbarUser.Root>
            <NavbarUser.Post
              postVisible={userVisibility}
              setPostVisibility={setUserVisibility}
            />
            <NavbarUser.Notifications
              notificationsVisible={userVisibility}
              setNotificationsVisibility={setUserVisibility}
            />
            <NavbarUser.Profile
              profileVisibility={userVisibility}
              setProfileVisibility={setUserVisibility}
            />
          </NavbarUser.Root>
        </Navbar.Root>
        <Navbar.Aside visible={menuVisibility} />
      </header>
      <Main.Root
        visible={menuVisibility}
        userOff={setUserVisibility}
        sideMenuOff={setMenuVisibility}
      >
        <></>
      </Main.Root>
    </>
  );
}

export default App;
