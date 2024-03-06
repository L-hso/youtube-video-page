import { ReactNode } from "react";
import { LateralVideo } from "./LateralVideo";
import { LateralVideosInfo } from "./LateralVideosInfo";

export function ContentLateralRoot({
   responsiveVisibility,
}: {
  
  responsiveVisibility: string[];
}) {
  return (
    <section
      className={`${responsiveVisibility[0]} ${responsiveVisibility[1]} flex-col w-full`}
    >
      <ul className=" flex flex-col gap-1.5">
        {Object.values(LateralVideosInfo).map((info, index)=><LateralVideo index={index} informations={info}/>)}
      </ul>
    </section>
  );
}
