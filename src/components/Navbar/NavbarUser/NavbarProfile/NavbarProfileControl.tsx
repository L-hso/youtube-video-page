import { Dispatch } from "react";
import { ProfileOptions } from "./NavbarProfileOptions";
import { FaGoogle } from "react-icons/fa";
import {
  CircleDollarSign,
  Globe,
  HelpCircle,
  Keyboard,
  Languages,
  LogOut,
  MessageSquareWarning,
  Moon,
  Settings,
  Shield,
  ShieldEllipsis,
  UsersRound,
} from "lucide-react";
import { SiYoutubestudio } from "react-icons/si";

export function NavbarProfile({
  profileVisibility,
  setProfileVisibility,
}: {
  profileVisibility: string;
  setProfileVisibility: Dispatch<string>;
}) {
  return (
    <div className="relative">
      <button
        className="hover:bg-youtube-gray p-1.5 rounded-full bg-[url('https://i1.sndcdn.com/artworks-QZ4Y5bsDEMAIb7d8-G5oQQw-t500x500.jpg')] w-[24px] h-[24px] bg-cover"
        onClick={() =>
          setProfileVisibility(
            profileVisibility == "profile" ? "none" : "profile"
          )
        }
      >
      </button>
      <div
        data-ativo={profileVisibility == "profile"}
        className="data-[ativo=true]:flex data-[ativo=false]:hidden flex-col absolute right-0 top-[105%] bg-youtube-dark rounded-md text-white overflow-hidden max-h-[calc(100vh-5rem)]"
      >
        <div className="flex items-start justify-start gap-3 px-2 py-4 w-[19.5rem]">
          <img
            src="https://i1.sndcdn.com/artworks-QZ4Y5bsDEMAIb7d8-G5oQQw-t500x500.jpg"
            alt="foto de perfil"
            className="w-9 h-9 rounded-full"
          />
          <div className="text-[0.90rem]">
            <span className="block">Luis Henrique</span>
            <span className="block">@luishenrique1109</span>
            <a href="#" className="block text-sky-500 font-medium">
              Acessar seu canal
            </a>
          </div>
        </div>
        <hr className="w-full border-[#555] h-[1.5px]" />
        <div className="overflow-y-auto new-scrollbar">
        <ProfileOptions
          names={["Conta do Google", "Mudar de Conta", "Sair"]}
          icons={{
            "Conta do Google": <FaGoogle size={20} />,
            "Mudar de Conta":<UsersRound size={20} />,
            "Sair":  <LogOut size={20} />,
          }}
          hasMoreThings={["Mudar de Conta"]}
        />
        <hr className="w-full border-[#555] h-[1.5px]" />
        <ProfileOptions
          names={["Youtube Studio", "Compras e assinaturas"]}
          icons={{
            "Youtube Studio": <SiYoutubestudio size={20} />,
            "Compras e assinaturas": <CircleDollarSign size={20} />,
          }}
        />
        <hr className="w-full border-[#555] h-[1.5px]" />
        <ProfileOptions
          names={[
            "Seus dados no Youtube",
            "Aparência: tema do dispositivo",
            "Idioma: Português",
            "Modo restrito: desativado",
            "Local: Brasil",
            "Atalhos do teclado",
          ]}
          hasMoreThings={[
            "Aparência: tema do dispositivo",
            "Idioma: Português",
            "Modo restrito: desativado",
            "Local: Brasil",
          ]}
          icons={{
            "Seus dados no Youtube": <Shield />,
            "Aparência: tema do dispositivo": <Moon />,
            "Idioma: Português": <Languages />,
            "Modo restrito: desativado": <ShieldEllipsis />,
            "Local: Brasil": <Globe />,
            "Atalhos do teclado": <Keyboard />,
          }}
        />
        <hr className="w-full border-[#555] h-[1.5px]" />
        <ProfileOptions
          names={["Configurações"]}
          icons={{ Configurações: <Settings /> }}
        />
        <hr className="w-full border-[#555] h-[1.5px]" />
        <ProfileOptions
        names={["Ajuda", "Enviar feedback"]}
        icons={{"Ajuda":<HelpCircle/>,
      "Enviar feedback": <MessageSquareWarning/>}}
        />
      </div>
      </div>
    </div>
  );
}
