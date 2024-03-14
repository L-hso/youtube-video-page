import { Download } from "lucide-react";
import { useState } from "react";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";

export function InfoToolbar() {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  return (
    <menu className="w-full flex flex-wrap gap-2 items-center justify-between">
      <li className="flex flex-wrap items-center gap-3">
        <a href="#">
          <img
            src="https://i.pinimg.com/236x/de/76/4d/de764d1ed49286039e6ab830d622f86f.jpg"
            alt="icone yt"
            width={45}
            height={45}
            className="rounded-full"
          />
        </a>
        <div className="min-w-20 max-w-32">
          <a href="#">
            <span className="block font-semibold text-white text-lg line-clamp-1 truncate">
              Lucas Montano
            </span>
          </a>
          <span className="block -mt-0.5 text-youtube-light-gray text-sm line-clamp-1 truncate">
            279 mil inscritos
          </span>
        </div>
        <button className="border-youtube-gray border-[1px] bg-youtube-darkest rounded-full text-sm text-white font-semibold px-1 py-1.5 w-[7.5rem] hover:bg-youtube-gray">
          Seja Membro
        </button>
        <button className="border-[1px] bg-white rounded-full text-sm text-youtube-darkest font-semibold px-1 py-1.5 w-[7.5rem] hover:bg-gray-200">
          Inscrever-se
        </button>
      </li>

      <li className="flex flex-wrap items-center gap-4">
        <div className="group flex items-center bg-youtube-gray rounded-full">
          <button
            className="flex items-center h-9 gap-2 rounded-l-full py-1.5 px-3 text-white font-semibold hover:bg-[#555] active:bg-[#666] active:transition-colors active:duration-500"
            onClick={() => {
              setDisliked(false);
              setLiked((state) => (state ? false : true));
            }}
          >
            {liked ?  <AiFillLike size={20} />: <AiOutlineLike size={20} />}
            <span className="inline">50 mil</span>
          </button>
          <div className="w-[1px] h-[25px] bg-[#777]" />
          <button
            className="flex items-center h-9 gap-2 rounded-r-full py-1.5 px-3 text-white font-semibold active:transition-colors active:duration-500 active:bg-youtube-light-gray hover:bg-[#555]"
            onClick={() => {
              setLiked(false);
              setDisliked((state) => (state&& !liked ? false : true));
            }}
          >
            {disliked ? (
             <AiFillDislike size={20} />
            ) : (
            <AiOutlineDislike size={20} />
            )}
          </button>
        </div>
        <button className="flex items-center h-9 gap-2 py-1.5 px-3 rounded-full text-white font-semibold bg-youtube-gray hover:bg-[#555]">
          <PiShareFat size={20} />
          <span>Compartilhar</span>
        </button>
        <button className="flex items-center h-9 gap-2 py-1.5 px-3 rounded-full text-white font-semibold bg-youtube-gray hover:bg-[#555]">
          <Download size={20} />
          <span>Download</span>
        </button>
        <button  className="flex items-center h-9 gap-2 py-1.5 px-3 rounded-full text-white font-semibold bg-youtube-gray hover:bg-[#555]">
          <PiShareFat size={20} />
          <span>Valeu</span>
        </button>
        <button className="flex items-center h-9 gap-2 py-1.5 px-3 rounded-full text-white font-semibold bg-youtube-gray hover:bg-[#555]">
        <PiShareFat size={20} />
        <span>Clipe</span>
      </button>
      </li>
    </menu>
  );
}
