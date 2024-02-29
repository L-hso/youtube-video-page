import { ReactNode } from "react";
import { sideMenuIcons } from "./NavbarMenuLateralIcons";

export function NavbarAsideSection({
  sectionName,
  sectionOptions,
}: {
  sectionName: string;
  sectionOptions: string[];
}) {

  return (
    <ul className="py-4 flex flex-col">
      <span className="font-bold text-2xl pl-2 mb-3">{sectionName}</span>
      {sectionOptions.map(
        (option, index): ReactNode => (
          <li
            className="self-start w-full truncate"
            key={index}
          >
            <a href="#" className="text-[0.95rem] flex items-center gap-5 p-2 w-full hover:bg-youtube-dark rounded-xl">
            <i>{sideMenuIcons[option]}</i>
              <span className="line-clamp-2 truncate inline-block">{option}</span>
            </a>
          </li>
        )
      )}
    </ul>
  );
}
