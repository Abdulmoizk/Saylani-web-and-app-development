import { useState } from "react";

const SquareBtn = ({value, onSquareClick}) => {
//   const [value, setvalue] = useState(null);
//   const handleclick = () => {
//     setvalue("X")
//   };
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
};

export default SquareBtn;
