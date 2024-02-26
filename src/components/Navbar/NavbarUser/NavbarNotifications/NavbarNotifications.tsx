import { ReactNode } from "react";

export function NavbarNotifications({ text, icon }: { text: string, icon: ReactNode }) {
  
  return (
    <li className="p-4 pl-4 w-full flex gap-4 items-center hover:bg-youtube-gray before:content-[''] cursor-pointer before:bg-sky-500 before:w-1 before:h-1 before:rounded-full">
      {icon}
      <div>
        <p className="text-sm">{text}</p>
        <span className="text-xs text-youtube-light-gray">há 16 minutos</span>
      </div>
    </li>
  );
}
