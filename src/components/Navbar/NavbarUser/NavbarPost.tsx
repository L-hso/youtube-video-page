import { PlaySquare, Radio, Video } from "lucide-react";
import { Dispatch } from "react";

export function NavbarUserPost({
  postVisible,
  setPostVisibility,
}: {
  postVisible: string;
  setPostVisibility: Dispatch<string>;
}) {
  

  return (
    <div className="relative">
      <button
        className="p-2 hover:bg-youtube-gray rounded-full"
        onClick={() => {
          setPostVisibility(postVisible == "post"?"none":"post");
          
        }}
      >
        <Video color="#fff" size={22} />
      </button>
      <ul
        data-ativo={postVisible=="post"}
        className="data-[ativo=true]:flex data-[ativo=false]:hidden flex-col absolute right-0 top-[105%] bg-youtube-dark rounded-md text-white overflow-hidden"
      >
        <li className="flex items-center gap-4 px-3 py-3 w-[13rem] hover:bg-youtube-gray cursor-pointer">
          <PlaySquare /><span>Enviar vídeo</span></li>
        <li className="flex items-center gap-4 px-3 py-3 w-[13rem] hover:bg-youtube-gray cursor-pointer">
          <Radio /><span>Transmitir ao vivo</span>
        </li>
      </ul>
    </div>
  );
}
