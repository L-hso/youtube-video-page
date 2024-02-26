import { Dispatch, ReactNode } from "react";

interface ContentRoot {
  children: ReactNode;
  visible: boolean;
  sideMenuOff: Dispatch<boolean>;
  userOff: Dispatch<string>;
}

export function ContentRoot({
  children,
  visible,
  sideMenuOff,
  userOff,
}: ContentRoot) {
  return (
    <main
      data-escurecido={visible}
      className="group w-screen min-h-[calc(100vh-3.5rem)] bg-youtube-darkest overflow-y-scroll new-scrollbar"
      onClick={() => {
        sideMenuOff(false);
        userOff("none");
      }}
    >
      <div className="group-data-[escurecido=true]:opacity-45 z-60 transition-opacity duration-300 w-full h-full">
      </div>
      {children}
    </main>
  );
}
