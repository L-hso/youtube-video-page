import { useState } from "react";
import { Navbar } from "./components/Navbar/Widget";
import { Content } from "./components/Content/Widget";
import { NavbarUser } from "./components/Navbar/NavbarUser/Widget";

function App() {

  const [menuVisibility, setMenuVisibility] = useState(false);
  const [userVisibility, setUserVisibility] = useState("none");

  return (
    <>
        <header className="fixed top-0 w-full">
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
      <Content.Root
        visible={menuVisibility}
        userOff={setUserVisibility}
        sideMenuOff={setMenuVisibility}
      >
        <Content.Principal.Root>
          <Content.Principal.Video />
          <Content.Lateral.Root responsiveVisibility={['lg:hidden', 'flex']}><></></Content.Lateral.Root>
        </Content.Principal.Root>
        <Content.Lateral.Root responsiveVisibility={['lg:flex', 'hidden']}><></></Content.Lateral.Root>
      </Content.Root>
    </>
  );
}

export default App;
