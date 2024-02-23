import { ReactNode } from "react";

export function MainContentRoot({children}:{children:ReactNode}){
  return (
    <main className="overflow-none  w-[98.5vw] h-[98.5vh] bg-youtube-dark">
      {children}
    </main>
  );
}