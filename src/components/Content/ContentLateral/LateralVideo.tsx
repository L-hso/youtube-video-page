import { Clock, ListVideo } from "lucide-react";
import { ReactNode } from "react";

interface LateralVideo {
  informations: {
    imagem: string;
    titulo: string;
    canal: string;
    visualizacoes: string;
    envio: string;
    duracao: string;
    tag?: ReactNode;
  };
  index: number;
}

export function LateralVideo({ informations, index }: LateralVideo) {



  return (
    <li key={index} className="flex w-full gap-2 *:text-white">
      {/* <img src={informations.imagem} alt="video" className="object-cover w-40 h-24 rounded-lg"/> */}
      <div
    
        className={`group w-40 h-24 rounded-lg flex-shrink-0 bg-violet-500 
      relative 
      `}
      >
        <span className="inline-block  transition-opacity duration-400 group-hover:opacity-0 absolute bottom-2 right-2 bg-[rgba(0,0,0,0.66)] px-[2.5px] text-[0.70rem] font-sans text-center">{informations.duracao}</span>
        <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-out absolute right-1 top-1 flex flex-col gap-1">
        <Clock size={22.5} className="bg-[rgba(0,0,0,0.66)] p-[2px] cursor-pointer"/> 
        <ListVideo size={22.5} className="bg-[rgba(0,0,0,0.66)] p-[2px] cursor-pointer"/>
        </div>
        
      </div>
      <div className="flex flex-col h-24 items-start">


        <span>
          <a className="justify-self-start leading-5 font-semibold line-clamp-2" href="#">{informations.titulo}</a>
        </span>


        <div className="justify-self-end">
        <span className="text-sm text-youtube-light-gray line-clamp-1">
        <a href="#" className="text-sm text-youtube-light-gray line-clamp-1">
          {informations.canal}
        </a>
              {informations.visualizacoes} - {informations.envio}
        </span>
            {informations.tag || <></>}
        </div>
      </div>
    </li>
  );
}
