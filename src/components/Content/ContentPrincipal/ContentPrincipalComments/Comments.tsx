import { commentsInfo } from "./CommentInfo";

export function Comments() {
  function setTime(pastDate:number):number{
      return Date.now() - pastDate;
  }
  return (
    <ul>
      {Object.entries(commentsInfo).map(([key, info]) => (
        <li key={key} className="flex gap-4">
          <img
            src="https://i1.sndcdn.com/artworks-QZ4Y5bsDEMAIb7d8-G5oQQw-t500x500.jpg"
            alt="foto de perfil"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <span className="block">Luis Henrique <span>{setInterval(()=>setTime(info.Date), 1000)}</span></span>
            <span>{info.Comment}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
