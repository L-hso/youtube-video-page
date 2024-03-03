export function LateralVideo({
  informations,
}: {
  informations: { imagem: string,titulo:string, canal:string, visualizacoes:string, envio:string};
}) {
  return (
    <li className="flex w-full gap-2 *:text-white">
      {/* <img src={informations.imagem} alt="video" className="object-cover w-40 h-24 rounded-lg"/> */}
      <div className="w-40 h-24 rounded-lg flex-shrink-0 bg-violet-500"/>
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
