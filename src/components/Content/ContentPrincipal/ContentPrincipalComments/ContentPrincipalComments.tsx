import { useState } from "react";
import { CommentsMaker } from "./CommentsMaker";
import { Comments } from "./Comments";

export function ContentPrincipalComments() {
  const [amountComments, setAmountComments] = useState(0);
  return (
    <article className="text-white w-full py-4">
      <header>
        <span className="font-bold text-xl font-sans">
          {amountComments} Comentários
        </span>
        
        <CommentsMaker 
        commentsAmount={amountComments}
        updateCommentsAmount={setAmountComments} />
      </header>
      <Comments/>
    </article>
  );
}
