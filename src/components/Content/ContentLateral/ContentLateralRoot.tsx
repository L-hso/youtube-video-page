import { ReactNode } from "react";

export function ContentLateralRoot({ children, responsiveVisibility }: { children: ReactNode, responsiveVisibility: string[] }) {
  return (<section className={`${responsiveVisibility[0]} ${responsiveVisibility[1]} flex-col bg-red-700 h-[200vh]`}>{children}</section>);
}
