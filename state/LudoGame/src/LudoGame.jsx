import { useState } from "react";
export default function LudoGame(){
let[moves,setMoves]=useState({Blue:0,Red:0,Yellow:0,Green:0})

let updateBlue=()=>{
        setMoves((prevmoves)=>{
        return{...prevmoves,Blue :prevmoves.Blue+1};
        });
};
let updateYellow=()=>{
    setMoves((prevmoves)=>{
    return{...prevmoves,Yellow :prevmoves.Yellow+1};
    });
};
let updateGreen=()=>{
    setMoves((prevmoves)=>{
    return{...prevmoves,Green :prevmoves.Green+1};
    });
};
let updateRed=()=>{
    setMoves((prevmoves)=>{
    return{...prevmoves,Red :prevmoves.Red+1};
    });
};
    return(
        <div>
            <p>Game Begins!</p>
            <div className="board">
            <p>Blue Moves= {moves.Blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>Red Moves= {moves.Red}</p>
            <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            <p>Yellow Moves= {moves.Yellow}</p>
            <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
            <p>Green Moves= {moves.Green}</p>
            <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            </div>
        </div>
    );
}