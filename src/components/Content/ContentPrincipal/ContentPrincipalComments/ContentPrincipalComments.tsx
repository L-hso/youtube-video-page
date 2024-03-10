import { useState } from "react";
import { CommentsMaker } from "./CommentsMaker";

export function ContentPrincipalComments(){
  const [amountComments, setAmountComments] = useState(0);

  return (<article className="text-white w-full p-4">
    <header>
      <span className="font-bold text-xl font-sans">{amountComments} Comentários</span>
      <CommentsMaker updateCommentsAmount={setAmountComments}/>
    </header>
  </article>);
}