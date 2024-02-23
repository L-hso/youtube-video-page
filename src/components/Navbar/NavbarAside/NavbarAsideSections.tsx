import { ReactNode } from "react";
import { sideMenuIcons } from "./NavbarAsideIcons";

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
            className="flex self-start items-center w-full hover:bg-youtube-dark p-1 truncate"
            key={index}
          >
            <a href="#" className="text-[0.95rem] flex gap-5 p-1 truncate">
            <i>{sideMenuIcons[option]}</i>
              {option}
            </a>
          </li>
        )
      )}
    </ul>
  );
}
