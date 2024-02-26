import { Dispatch, ReactNode } from "react";

interface MainContentRoot {
  children: ReactNode;
  visible: boolean;
  sideMenuOff: Dispatch<boolean>;
  userOff: Dispatch<string>;
}

export function MainContentRoot({
  children,
  visible,
  sideMenuOff,
  userOff,
}: MainContentRoot) {
  return (
    <main
      data-escurecido={visible}
      className="group w-screen h-[calc(100vh-3.5rem)] bg-youtube-darkest overflow-hidden"
      onClick={() => {
        sideMenuOff(false);
        userOff("none");
      }}
    >
      <div className="group-data-[escurecido=true]:opacity-45 z-[-1] transition-opacity duration-300 w-full h-full">
        {children}
      </div>
    </main>
  );
}
