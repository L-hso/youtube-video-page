import { Bell, MailWarning, PartyPopper, Settings } from "lucide-react";
import { Dispatch } from "react";
import { NavbarNotifications } from "./NavbarNotifications";

export function NavbarNotificationControl({
  notificationsVisible,
  setNotificationsVisibility,
}: {
  notificationsVisible: string;
  setNotificationsVisibility: Dispatch<string>;
}) {
  

  return (
    <div className="relative ">
      <button
        className={`p-2 hover:bg-youtube-gray rounded-full relative ${
          notificationsVisible=='notifications'
            ? ""
            : "after:content-['2+'] after:px-[4px] after:text-[0.65rem] after:text-white after:font-bold after:bg-red-600 after:rounded-xl after:absolute after:top-0 after:right-0"
        }`}
        onClick={() => {
          setNotificationsVisibility(notificationsVisible == "notifications"?"none":"notifications");
          
        }}
      >
        <Bell size={22} color="#fff" />
      </button>
      <ul
        className="data-[visible=true]:flex data-[visible=false]:hidden flex-col absolute right-0 top-[105%] bg-youtube-dark rounded-md text-white"
        data-visible={notificationsVisible=="notifications"}
      >
        <div className="w-96 px-4 py-2 flex justify-between items-center">
          <span className="inline-block">Notificações</span>
          <Settings color="#777" size={20} />
        </div>
        <hr className="w-full border-[#555] h-[1.5px]" />
        <NavbarNotifications
          icon={<PartyPopper />}
          text={"Seja bem-vindo! Há muitos videos legais aqui."}
        />
        <NavbarNotifications
          icon={<MailWarning />}
          text={"Confirme o seu email para ter acesso a mais funções."}
        />
      </ul>
    </div>
  );
}
