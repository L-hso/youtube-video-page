import { commentsInfo } from "./CommentInfo";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

export function Comments() {
  function setTimePast(pastDate: number): string {
    let timePast = (Date.now() - pastDate) / 1000;

    if (timePast >= 60 && timePast < 3600) {
      timePast = Math.floor(timePast / 60);

      return `há ${timePast} ${timePast == 1 ? "minuto" : "minutos"}`;
    } else if (timePast >= 3600 && timePast < 86400) {
      timePast = Math.floor(timePast / 3600);

      return `há ${timePast} ${timePast == 1 ? "hora" : "horas"}`;
    } else if (timePast >= 86400 && timePast < 2592000) {
      timePast = Math.floor(timePast / 86400);

      return `há ${timePast} ${timePast == 1 ? "dia" : "dias"}`;
    } else if (timePast >= 2592000 && timePast < 31104000) {
      timePast = Math.floor(timePast / 2592000);

      return `há ${timePast} ${timePast == 1 ? "mês" : "meses"}`;
    } else if (timePast >= 31104000) {
      timePast = Math.floor(timePast / 31104000);

      return `há ${timePast} ${timePast == 1 ? "ano" : "anos"}`;
    }

    return `há ${Math.floor(timePast)} segundos`;
  }

  return (
    <ul className="mt-5">
      {Object.entries(commentsInfo).map(([key, info]) => (
        <li key={key} className="flex gap-4 items-start py-1">
          <img
            src="https://i1.sndcdn.com/artworks-QZ4Y5bsDEMAIb7d8-G5oQQw-t500x500.jpg"
            alt="foto de perfil"
            className="w-9 h-9 rounded-full"
          />
          <div>
            <span className="block font-bold text-base font-sans">
              @Luis Henrique{" "}
              <span className="font-normal text-sm text-neutral-400">
                {setTimePast(info.Date)}
              </span>
            </span>
            <span>{info.Comment}</span>
            <menu className="py-2 flex items-center gap-2">
              <li>
                <AiOutlineLike size={20} className="cursor-pointer" />
              </li>
              <li>
                <AiOutlineDislike size={20} className="cursor-pointer" />
              </li>
              <li className="font-medium cursor-pointer ml-3">Responder</li>
            </menu>
          </div>
        </li>
      ))}
    </ul>
  );
}
