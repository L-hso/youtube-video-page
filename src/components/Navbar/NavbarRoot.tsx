import { Dispatch, ReactNode } from "react";

import { Menu } from "lucide-react";

interface NavbarRoot {
  children: ReactNode;
  toggleMenuVisibility: Dispatch<boolean>;
  menuVisibility: boolean;
}

export function NavbarRoot({
  children,
  menuVisibility,
  toggleMenuVisibility,
}: NavbarRoot) {
  return (
    <nav className="w-full p-1.5 pl-4 pr-6 h-14 bg-youtube-darkest flex items-center justify-between z-30">
      <button
        className="px-2 py-2 rounded-full hover:bg-youtube-dark"
        onClick={(): void => toggleMenuVisibility(menuVisibility == false)}
      >
        <Menu color={"#efefef"} size={26} strokeWidth={1.75} />
      </button>
      {children}
    </nav>
  );
}
