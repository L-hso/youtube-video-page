import { useState } from "react";

export function ContentPrincipalComments(){
  const [amountComments, setAmountComments] = useState(0);

  return (<article>
    <header>
      <span>{amountComments} Comentários</span> 
    </header>
  </article>);
}