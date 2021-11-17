import React, { useState, useEffect, Fragment } from "react";
// import Row from "../Row/Row";
import "./drawingwindow.css";

export const Square = () => {
  return <div className='square'></div>;
};

const CanvasSizePicker = () => {};

const DrawingWindow = ({ panelLength, selectedColor }) => {
  const [grid, setGrid] = useState();

  const divStyle = {
    height: "500px",
    width: "500px",
    display: "grid",
    border: "1px solid black",
    gridTemplateColumns: "repeat(auto-fill, 25px)",
    gridTemplateRows: "repeat(auto-fill, 25px)",
  };

  let squares = [];
  useEffect(() => {
    const generateGrid = () => {
      for (let i = 0; i < 400; i++) {
        squares.push(<Square />);
      }
    };
    generateGrid();
    setGrid(squares);
  }, []);

  console.log(grid);
  return (
    <Fragment>
      <div className='containerDrawing' style={divStyle}>
        {grid}
      </div>
    </Fragment>
  );
};

export default DrawingWindow;
