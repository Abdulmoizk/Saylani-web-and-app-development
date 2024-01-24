import { useState } from "react";
import SquareBtn from "./square";

const Board = () => {
const [squares, setsquares] = useState(Array(9).fill(null))
const handleClick=(i)=>{
    const nextSquares = squares.slice();
    nextSquares[i] ="X"
    setsquares(nextSquares);
}    
return (
    <div className="p-5">
      <div className="">
        <SquareBtn value={squares[0]} onSquareClick={{handleClick}}/>
        <SquareBtn value={squares[1]}/>
        <SquareBtn value={squares[2]}/>
      </div>
      <div className="">
        <SquareBtn value={squares[3]}/>
        <SquareBtn value={squares[4]}/>
        <SquareBtn value={squares[5]}/>
      </div>
      <div className="">
        <SquareBtn value={squares[6]}/>
        <SquareBtn value={squares[7]}/>
        <SquareBtn value={squares[8]}/>
      </div>
    </div>
  );
};

export default Board;
