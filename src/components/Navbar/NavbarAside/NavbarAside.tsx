import { NavbarAsideSection } from "./NavbarAsideSections";
import { Home, Play, Users } from "lucide-react";

export function NavbarAside({ visible }: { visible: boolean }) {
  const sideMenuOptions: { [key: string]: string[] } = {
    Você: [
      "Seu canal",
      "Histórico",
      "Seus vídeos",
      "Assistir mais tarde",
      'Videos marcados com "Gostei"',
    ],
    Inscrições: ["Canal 1", "Canal 2", "Canal 3"],
    Explorar: [
      "Em alta",
      "Shopping",
      "Música",
      "Filmes",
      "Ao vivo",
      "Jogos",
      "Notícias",
      "Esportes",
      "Aprender",
      "Podcasts",
    ],
    "Mais do Youtube": [
      "Youtube Premium",
      "Youtube Studio",
      "Youtube Music",
      "Youtube Kids",
    ],
  };

  const FIRST_OPTIONS_STYLES = ["flex self-start items-center w-full hover:bg-youtube-dark p-1 rounded-xl", "text-[0.95rem] flex gap-5 p-1 rounded-xl"];

  return (
    <>
      <aside
        data-ativo={visible}
        className="bg-youtube-darkest overflow-y-auto new-scrollbar transition-transform duration-300 -translate-x-full  flex-col justify-start items-around max-w-[15.5rem] px-4 py-2 data-[ativo=true]:translate-x-0 *:text-white absolute bottom-0 h-[calc(100%-3.5rem)] z-10"
      >
        <ul className="py-4 flex flex-col">
          <li className={FIRST_OPTIONS_STYLES[0]}>
            <a href="#" className={FIRST_OPTIONS_STYLES[1]}>
              <Home size={21.5}/>
              Início
            </a>
          </li>
          <li className={FIRST_OPTIONS_STYLES[0]}>
            <a href="#" className={FIRST_OPTIONS_STYLES[1]}>
              <Play size={21.5}/>
              Shorts
            </a>
          </li>
          <li className={FIRST_OPTIONS_STYLES[0]}>
            <a href="#" className={FIRST_OPTIONS_STYLES[1]}>
              <Users size={21.5}/>
              Inscrições
            </a>
          </li>
        </ul>
        <hr className="w-full border-[#555] h-[1.5px]"/>

        <NavbarAsideSection
          sectionName="Você"
          sectionOptions={sideMenuOptions["Você"]}
        />

        <hr className="w-full border-[#555] h-[1.5px]"/>
        <NavbarAsideSection
          sectionName="Inscrições"
          sectionOptions={sideMenuOptions["Inscrições"]}
        />
        <hr className="w-full border-[#555] h-[1.5px]"/>
        <NavbarAsideSection
          sectionName="Explorar"
          sectionOptions={sideMenuOptions["Explorar"]}
        />
        <hr className="w-full border-[#555] h-[1.5px]"/>
        <NavbarAsideSection
          sectionName="Mais do Youtube"
          sectionOptions={sideMenuOptions["Mais do Youtube"]}
        />
      </aside>
    </>
  );
}
