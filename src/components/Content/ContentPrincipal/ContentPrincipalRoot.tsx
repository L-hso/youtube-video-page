import { ReactNode } from "react";

export function ContentPrincipalRoot({children}:{children:ReactNode}){
  return (<section className="flex flex-col lg:col-span-2 col-span-full bg-blue-700">
    {children}
  </section>);
}