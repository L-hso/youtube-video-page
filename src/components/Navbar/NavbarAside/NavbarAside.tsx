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

  const FIRST_OPTIONS_STYLES = ["flex self-start items-center w-full hover:bg-youtube-dark p-1 truncate", "text-[0.95rem] flex gap-5 p-1 truncate"];

  return (
    <>
      <aside
        data-ativo={visible}
        className="bg-youtube-darkest overflow-y-auto no-scrollbar transition-transform duration-300 -translate-x-full  flex-col justify-start items-around max-w-60 px-4 py-2 data-[ativo=true]:translate-x-0 *:text-white absolute bottom-0 h-[calc(100%-3.5rem)] z-10"
      >
        <ul className="py-4 flex flex-col">
          <li className={FIRST_OPTIONS_STYLES[0]}>
            <a href="#" className={FIRST_OPTIONS_STYLES[1]}>
              <Home />
              Início
            </a>
          </li>
          <li className={FIRST_OPTIONS_STYLES[0]}>
            <a href="#" className={FIRST_OPTIONS_STYLES[1]}>
              <Play />
              Shorts
            </a>
          </li>
          <li className={FIRST_OPTIONS_STYLES[0]}>
            <a href="#" className={FIRST_OPTIONS_STYLES[1]}>
              <Users />
              Inscrições
            </a>
          </li>
        </ul>
        <hr />

        <NavbarAsideSection
          sectionName="Você"
          sectionOptions={sideMenuOptions["Você"]}
        />

        <hr />
        <NavbarAsideSection
          sectionName="Inscrições"
          sectionOptions={sideMenuOptions["Inscrições"]}
        />
        <hr />
        <NavbarAsideSection
          sectionName="Explorar"
          sectionOptions={sideMenuOptions["Explorar"]}
        />
        <hr />
        <NavbarAsideSection
          sectionName="Mais do Youtube"
          sectionOptions={sideMenuOptions["Mais do Youtube"]}
        />
      </aside>
    </>
  );
}
