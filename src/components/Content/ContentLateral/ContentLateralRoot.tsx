import { LateralVideo } from "./LateralVideo";
import { LateralVideosInfo } from "./LateralVideosInfo";

export function ContentLateralRoot({
  responsiveVisibility,
}: {
  responsiveVisibility: string[];
}) {
  return (
    <aside
      className={`${responsiveVisibility[0]} ${responsiveVisibility[1]} flex-col gap-2 w-full`}
    >
      
      <article className="flex flex-col w-full rounded-xl border-neutral-500 border-[1.5px] overflow-hidden">
        <div className="bg-gradient-to-r from-lime-600 via-sky-800 to-violet-950 w-full h-14" />
        <footer className="text-white bg-youtube-darkest flex items-center gap-2 px-3 py-3 ">
        <div className="w-10 h-10 rounded-full bg-lime-500" />
          <div>
            <span className="block">Duolingo plus</span>
            <span>
              <strong className="text-sm">Patrocinado</strong> • <a href="#" className="text-sm text-youtube-light-gray">duolingo.com.br</a>
            </span>
          </div>
          <button className="ml-auto bg-sky-400 hover:bg-sky-500 text-youtube-gray font-semibold px-4 py-1 rounded-full">Baixar</button>
        </footer>
      </article>
      <ul className=" flex flex-col gap-1.5">
        {Object.entries(LateralVideosInfo).map(([index, info]) => (
          <LateralVideo index={`L-${index}`} informations={info} />
        ))}
      </ul>
    </aside>
  );
}
