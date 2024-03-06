interface LateralVideo {
  informations: { imagem: string,titulo:string, canal:string, visualizacoes:string, envio:string, duracao:string}, index:number;
}

export function LateralVideo({
  informations,
  index
}: LateralVideo) {
  return (
    <li key={index} className="flex w-full gap-2 *:text-white">
      {/* <img src={informations.imagem} alt="video" className="object-cover w-40 h-24 rounded-lg"/> */}
      <div className={`group w-40 h-24 rounded-lg flex-shrink-0 bg-violet-500 
      relative after:invisible group-hover:after:visible after:content-["19:45"] after:absolute after:bottom-2 after:right-2 
      after:bg-[rgba(0,0,0,0.66)] after:px-[2px] after:text-[0.70rem] after:font-sans`}/>
      <div className="flex flex-col justify-between">
      <span className="text-base font-semibold line-clamp-2">{informations.titulo}</span> 
      <div>
        <span className="text-sm text-youtube-light-gray line-clamp-1">{informations.canal}</span>
        <div>
          <span className="text-sm text-youtube-light-gray line-clamp-1">
            {informations.visualizacoes} - {informations.envio}
          </span>
        </div>
      </div>
      </div>
    </li>
  );
}
