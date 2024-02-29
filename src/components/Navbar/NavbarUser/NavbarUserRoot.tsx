import { ReactNode } from "react";

export function NavbarUserRoot({children}:{children:ReactNode}){
  return <div className="flex items-center h-full gap-3 z-30">{children}</div>;
}