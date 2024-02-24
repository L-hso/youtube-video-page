import { ReactNode } from "react";

export function MainContentRoot({children, visible}:{children:ReactNode, visible:boolean}){
  return (
    <main data-escurecido={visible} className="group w-screen h-[calc(100vh-3.5rem)] bg-youtube-darkest overflow-hidden">
      <div className="group-data-[escurecido=true]:opacity-45 z-[-1] transition-opacity duration-300 w-full h-full">{children}</div>
    </main>
  );
}