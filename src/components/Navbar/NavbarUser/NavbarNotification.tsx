import { Bell } from "lucide-react";

export function NavbarNotification(){
  return (
    <div>
      <button><Bell size={19.5} color="#fff"/></button>
      <ul className="hiden">
        <li></li>
      </ul>
    </div>
  )
}