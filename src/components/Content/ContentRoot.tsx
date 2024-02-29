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
      className="w-full min-h-[calc(100vh-3.5rem)] data-[escurecido=true]:opacity-45 transition-opacity duration-300 h-full px-6 py-7 grid grid-cols-3 gap-5 -z-20 absolute top-14"
      onClick={() => {
        sideMenuOff(false);
        userOff("none");
      }}
    >
{children}
    </main>
  );
}
