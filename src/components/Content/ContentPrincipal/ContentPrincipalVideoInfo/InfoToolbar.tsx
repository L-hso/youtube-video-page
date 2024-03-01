import { ThumbsDown, ThumbsUp } from "lucide-react";
import { PiShareFat } from "react-icons/pi";

export function InfoToolbar() {
  return (
    <menu className="w-full flex items-center justify-between">
      <li className="flex items-center gap-3">
      <img src="https://i.pinimg.com/236x/de/76/4d/de764d1ed49286039e6ab830d622f86f.jpg" alt="icone yt" width={50} height={50} className="rounded-full"/>
        <div>
          <span className="block font-semibold text-white text-lg">
            Lucas Montano
          </span>
          <span className="block -mt-0.5 text-youtube-light-gray text-sm">
            279 mil inscritos
          </span>
        </div>
        <button className="border-youtube-gray border-[1px] bg-youtube-darkest rounded-full text-sm text-white font-semibold py-1.5 w-[7.5rem] hover:bg-youtube-gray">
          Seja Membro
        </button>
        <button className="border-[1px] bg-white rounded-full text-sm text-youtube-darkest font-semibold py-1.5 w-[7.5rem] hover:bg-gray-200">
          Inscrever-se
        </button>
      </li>

      <li className="flex items-center gap-4">
        <div className="flex items-center bg-youtube-gray rounded-full">
          <button className="flex items-center h-9 gap-2 rounded-l-full py-1.5 px-3 text-white font-semibold hover:bg-[#555]">
            <ThumbsUp size={20}/>
            50 mil
          </button>
          <div className="w-[1px] h-[25px] bg-[#777]"/>
          <button className="flex items-center h-9 gap-2 rounded-r-full py-1.5 px-3 text-white font-semibold hover:bg-[#555]">
            <ThumbsDown size={20}/>
          </button>
        </div>
        <button className="flex items-center h-9 gap-2 py-1.5 px-3 rounded-full text-white font-semibold bg-youtube-gray hover:bg-[#555]">
          <PiShareFat size={20}/>
          Compartilhar
        </button>
      </li>
    </menu>
  );
}
