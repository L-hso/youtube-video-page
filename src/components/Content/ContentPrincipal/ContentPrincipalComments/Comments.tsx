import { commentsInfo } from "./CommentsInfo";

export function Comments(){
  return (<ul>
  {commentsInfo.map((CommentInfo, key)=><li key={`C-${key}`}>{CommentInfo?.Comment}</li>)}
    </ul>);
}