import React from "react";

const Square = ({ id, selectedColor, handleClick, color }) => {
  // const [squareState, setSquareState] = useState({
  //   color: "#FFFFFF",
  //   filled: false,
  //   animation: null,
  // });

  const squareStyle = {
    height: "25px",
    width: "25px",
    border: "1px solid black",
    backgroundColor: `${color}`,
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setSquareState({
  //     ...squareState,
  //     filled: filled ? false : true,
  //     color: squareState.color !== "#FFFFFF" ? "#FFFFFF" : selectedColor,
  //   });
  // };

  return <div className='square' style={squareStyle} onClick={() => handleClick(id)}></div>;
};

export default Square;
