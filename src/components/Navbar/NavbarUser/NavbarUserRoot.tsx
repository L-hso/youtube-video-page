import { ReactNode } from "react";

export function NavbarUserRoot({children}:{children:ReactNode}){
  return <div className="flex items-center h-full gap-3  px-4 z-10">{children}</div>;
}