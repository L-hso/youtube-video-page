import { Dispatch, SetStateAction, useRef, useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { commentsInfo } from "./CommentInfo";
import EmojiPicker, {EmojiStyle, Theme} from "emoji-picker-react";

export function CommentsMaker({
  updateCommentsAmount,
  commentsAmount,
}: {
  updateCommentsAmount: Dispatch<SetStateAction<number>>;
  commentsAmount: number;
}) {
  const [commentMakerFocus, setCommentMakerFocus] = useState(false);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  function updateComments(): void {
    commentsInfo[`C-${commentsAmount}`] = {
      Comment: inputRef.current!.value,
      Date: Date.now(),
    };

    updateCommentsAmount(Object.keys(commentsInfo).length);

    inputRef.current!.value = "";
    setButtonDisabled(true);
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
            setButtonDisabled(inputRef.current!.value.split("").join("") == "")
          }
        />
        <div className="py-2  justify-between items-center hidden peer-data-[focus=true]:flex">
        <div className="relative">
          <button className="p-2.5 rounded-full hover:bg-youtube-dark" onClick={()=>{inputRef.current!.focus(); emojiPickerRef.current!.style.display = emojiPickerRef.current!.style.display=="block"? "none": "block"}}><BsEmojiLaughing size={20} /></button>
          <div ref={emojiPickerRef}className="block absolute"><EmojiPicker theme={Theme.DARK} emojiStyle={EmojiStyle.NATIVE}/></div>
         </div>
          <div className="flex gap-4 *:rounded-full *:px-4 *:py-1.5 *:font-medium">
            <button
              className="hover:bg-neutral-600"
              onClick={() => {
                setCommentMakerFocus(false);
                setButtonDisabled(true);
                inputRef.current!.value = "";
              }}
            >
              Cancelar
            </button>
            <button
              disabled={buttonDisabled}
              className="disabled:bg-neutral-600 bg-sky-500 text-youtube-dark"
              onClick={() => updateComments()}
            >
              Comentar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
