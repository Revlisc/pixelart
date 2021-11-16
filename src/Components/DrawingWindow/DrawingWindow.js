import React, { useState, useEffect } from "react";
// import Row from "../Row/Row";
import "./drawingwindow.css";

export const Square = () => {
  return <div className='square'></div>;
};

const DrawingWindow = ({ panelLength, selectedColor }) => {
  const [grid, setGrid] = useState();
  let squares = [];

  useEffect(() => {
    for (let i = 0; i < panelLength; i++) {
      squares.push(<Square />);
    }
    setGrid(squares);
  }, []);

  console.log(grid);
  return <div className='containerDrawing'>{grid}</div>;
};

export default DrawingWindow;
