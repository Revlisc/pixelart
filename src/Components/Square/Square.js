import React, { useState } from "react";

const Square = ({ id, selectedColor }) => {
  const [squareState, setSquareState] = useState({
    color: "#FFFFFF",
    filled: false,
    animation: null,
  });

  const { color, filled /*animation*/ } = squareState;

  const squareStyle = {
    height: "25px",
    width: "25px",
    border: "1px solid black",
    backgroundColor: `${color}`,
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSquareState({
      ...squareState,
      filled: filled ? false : true,
      color: squareState.color !== "#FFFFFF" ? "#FFFFFF" : selectedColor,
    });
  };

  return <div className='square' style={squareStyle} onClick={(e) => handleClick(e)}></div>;
};

export default Square;
