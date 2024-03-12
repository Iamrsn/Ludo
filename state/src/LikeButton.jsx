import { useState } from "react";

function LikeButton(){
    let [isliked,setisliked]=useState(false);
    let [clicks,setclicks]=useState(0);

    function toggleclick(){
        setisliked(!isliked);
        setclicks(clicks+1);
    }
    let likestyle={color:"red"};

    return(
        <div>
            <p>clicks={clicks}</p>
            <p onClick={toggleclick}>
                { isliked ? (<i className="fa-solid fa-heart" style={likestyle}></i>): (<i className="fa-regular fa-heart"></i>)}
            </p>
        </div>
    );

}
export default LikeButton;