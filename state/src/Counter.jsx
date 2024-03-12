import { useState } from "react";
export default function Counter(){
    let[count,setcount]=useState(0);

function inccount(){
    setcount(count+2);
}
 
return(
    <div>
        <h3>Count={count}</h3>
        <button onClick={inccount}>Increase Count</button>
    </div>
);
}