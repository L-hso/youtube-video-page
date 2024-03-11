import { Dispatch, SetStateAction, useRef, useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { commentsInfo, setCommentsInfo } from "./CommentsInfo";

export function CommentsMaker({
  updateCommentsAmount,
}: {
  updateCommentsAmount: Dispatch<SetStateAction<number>>;
}) {
  const [commentMakerFocus, setCommentMakerFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function updateComments():void {
    updateCommentsAmount((num: number): number => {
      
      return num + 1;
    });
    setCommentsInfo(state=>[...state, {Comment:inputRef.current!.value, Date:new Date()}])




    console.log(commentsInfo);




    inputRef.current!.value = "";
    buttonRef.current!.disabled = true;
  }

  return (
    <div className="flex gap-2 mt-4 justify-start">
      <img
        src="https://i1.sndcdn.com/artworks-QZ4Y5bsDEMAIb7d8-G5oQQw-t500x500.jpg"
        alt="foto de perfil"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col flex-1">
        <input
          data-focus={commentMakerFocus}
          ref={inputRef}
          type="text"
          placeholder="Adicione um comentário"
          className="peer bg-transparent border-b-[1.75px] border-b-youtube-gray pt-0 py-1 outline-none transition-all duration-400 ease-in focus:border-b-youtube-light-gray"
          onFocus={() => setCommentMakerFocus(true)}
          onInput={() =>
            (buttonRef.current!.disabled =
              inputRef.current!.value.split("").join("") == "")
          }
        />
        <div className="py-2  justify-between items-center hidden peer-data-[focus=true]:flex">
          <BsEmojiLaughing size={20} />
          <div className="flex gap-4 *:rounded-full *:px-4 *:py-1.5 *:font-medium">
            <button
              className="hover:bg-neutral-600"
              onClick={() => {
                setCommentMakerFocus(false);
                buttonRef.current!.disabled = true;
                inputRef.current!.value = "";
              }}
            >
              Cancelar
            </button>


            
            <button
              ref={buttonRef}
              
              className="disabled:bg-neutral-600 bg-sky-500 text-youtube-dark"
              onClick={()=>updateComments()}
            >
              Comentar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
