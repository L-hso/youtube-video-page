import { InfoToolbar } from "./InfoToolbar";




export function ContentPrincipalVideoInfo(){
  return (
    <div className="w-full flex flex-col gap-3 py-2">
      <h1 className="font-bold text-2xl text-white">Não fui feito para Programar != Bloqueado no Código</h1>
      <InfoToolbar/>
      <article className="bg-youtube-gray text-white py-3 px-4 rounded-xl">
        <header className="font-bold"><span>260 mil Visualizações</span><span className="ml-2">há 3 meses</span></header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officiis quisquam distinctio facere ratione animi quaerat corrupti nesciunt laboriosam consequatur. Mollitia blanditiis odio, ut reiciendis repellendus voluptatem omnis velit esse!</p>
      </article>
    </div>
  );
}