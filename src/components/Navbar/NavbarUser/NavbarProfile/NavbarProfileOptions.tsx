import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

export function ProfileOptions({
  icons,
  names,
  hasMoreThings = [''],
}: {
  icons: { [key: string]: ReactNode };
  names: string[];
  hasMoreThings?: string[];
}) {
  return (
    <ul className="py-2">
      {names.map((name, index) => {
        return (
          <li key={index}>
            <a
              href="#"
              className="flex items-center justify-between pl-4 pr-5 h-10 w-full hover:bg-youtube-gray"
            >
              <div className="flex items-center gap-4">
              <i>{icons[name]}</i>
              <span className="text-[0.9rem] inline-block">{name}</span>
              </div>
              {hasMoreThings.includes(name) && (
                <ChevronRight size={18} className="justify-self-end" />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
