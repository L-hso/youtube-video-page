import { Dispatch } from "react";
import { BsEmojiLaughing } from "react-icons/bs";

export function CommentsMaker({
  updateCommentsAmount,
}: {
  updateCommentsAmount: Dispatch<number>;
}) {
  return (
    <div className="flex gap-2">
      <img
        src="https://i1.sndcdn.com/artworks-QZ4Y5bsDEMAIb7d8-G5oQQw-t500x500.jpg"
        alt="foto de perfil"
        className="w-9 h-9 rounded-full"
      />
      <div className="flex flex-col flex-1">
        <input
          type="text"
          placeholder="Adicione um comentário"
          className="bg-transparent border-b-2 border-b-youtube-gray px-2"
        />
        <div className="py-2 flex justify-between items-center">
          <BsEmojiLaughing size={20}/>{" "}
          <div className="flex gap-4 *:rounded-full *:px-4 *:py-1.5 *:font-medium">
            <button className="hover:bg-neutral-600">Cancelar</button>
            <button className="bg-sky-500 text-youtube-dark"
              onClick={() =>
                updateCommentsAmount((state:number):number =>state+1)
              }
            >
              Comentar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
