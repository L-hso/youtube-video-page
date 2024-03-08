import { InfoToolbar } from "./InfoToolbar";

import {useState} from 'react';


export function ContentPrincipalVideoInfo(){

  const [collapse, setCollapse] = useState(false);

  return (
    <div className="w-full flex flex-col gap-3 py-2">
      <h1 className="font-bold text-2xl text-white">Não fui feito para Programar != Bloqueado no Código</h1>
      <InfoToolbar/>
      <article data-collapse={collapse} className="group bg-youtube-gray text-white py-3 px-4 rounded-xl hover:bg-[#4e4e4e] cursor-pointer relative" onClick={()=>setCollapse((state)=>state==false)}>
        <header className="font-bold"><span>260 mil Visualizações</span><span className="ml-2">há 3 meses</span></header>
        <div className="relative w-5/6">
        <p className="line-clamp-3 group-data-[collapse=true]:line-clamp-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officiis quisquam distinctio facere ratione animi quaerat corrupti nesciunt laboriosam consequatur. Mollitia blanditiis odio, ut reiciendis repellendus voluptatem! Nihil officiis quisquam distinctio facere ratione animi quaerat corrupti nesciunt laboriosam consequatur. Mollitia blanditiis odio, ut reiciendis repellendus voluptatem!</p>
        <div className="absolute bottom-0 right-0 group-data-[collapse=true]:block group-data-[collapse=true]:ml-0 group-data-[collapse=true]:pl-0 group-data-[collapse=true]:text-left 
        group-data-[collapse=true]:relative
        group-data-[collpase=true]:bottom-au
        -ml-8 pl-8 text-right bg-gradient-to-r from-transparent from-5%  to-20% to-youtube-gray group-hover:to-[#4e4e4e]">{collapse == true?"Ver menos":"...Ver mais"}</div>
        </div>
      </article>
    </div>
  );
}