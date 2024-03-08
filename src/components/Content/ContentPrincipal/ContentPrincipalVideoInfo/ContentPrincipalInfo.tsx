import { InfoToolbar } from "./InfoToolbar";
import { useState } from "react";

export function ContentPrincipalVideoInfo() {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="w-full flex flex-col gap-3 py-2">
      <h1 className="font-bold text-2xl text-white">
        Não fui feito para Programar != Bloqueado no Código
      </h1>
      <InfoToolbar />
      <article
        data-collapse={collapse}
        className="group bg-youtube-gray text-white py-3 px-4 rounded-xl data-[collapse=false]:hover:bg-[#4e4e4e] cursor-pointer"
        onClick={() => {
          if (!collapse) {
            setCollapse(true);
          }
        }}
      >
        <header className="font-bold">
          <span>260 mil Visualizações</span>
          <span className="ml-2">há 3 meses</span>
        </header>
        <div className="group-data-[collapseflex flex-col gap-5 items-start w-5/6">
          <p className="line-clamp-3 group-data-[collapse=true]:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            officiis quisquam distinctio facere ratione animi quaerat corrupti
            nesciunt laboriosam consequatur. Mollitia blanditiis odio, ut
            reiciendis repellendus voluptatem! Nihil officiis quisquam
            distinctio facere ratione animi quaerat corrupti nesciunt laboriosam
            consequatur. Mollitia blanditiis odio, ut reiciendis repellendus
            voluptatem! Mollitia blanditiis odio, ut reiciendis repellendus
            voluptatem! Nihil officiis quisquam distinctio facere ratione animi
            quaerat corrupti nesciunt laboriosam consequatur. Mollitia
            blanditiis odio, ut reiciendis repellendus voluptatem!
          </p>
          <button
          onClick={() => setCollapse(false)}
          className="font-semibold transition-all duration-300 group-data-[collapse=true]:text-left group-data-[collapse=true]:active:bg-[#4e4e4e]"
        >
          {collapse ? "Mostrar menos" : "...mais"}
        </button>
        </div>
        
      </article>
    </div>
  );
}
