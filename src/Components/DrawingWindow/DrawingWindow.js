import React, { useState, useEffect, Fragment } from "react";
import "./drawingwindow.css";
import Square from "../Square/Square";

import { v4 as uuidv4 } from "uuid";

// const getWindowDimentions = () => {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     height,
//     width,
//   };
// };

const DrawingWindow = ({ selectedColor }) => {
  const [grid, setGrid] = useState();

  //const [windowDimensions, setWindowDimensions] = useState(getWindowDimentions());
  //const [canvasWidth, setCanvasWidth] = useState("");

  // const getCanvasWidth = () => {
  //   //should be 75% of viewport height?
  //   let adjustedWidth = Math.floor(windowDimensions.width * 0.75);
  //   //setCanvasWidth(adjustedWidth);
  // };

  const divStyle = {
    height: "500px",
    width: `500px`, //${canvasWidth}px
    display: "grid",
    border: "1px solid black",
    gridTemplateColumns: "repeat(auto-fill, 25px)",
    gridTemplateRows: "repeat(auto-fill, 25px)",
  };

  //render grid on load
  useEffect(() => {
    let squares = [];

    const generateGrid = () => {
      for (let i = 0; i < 400; i++) {
        squares.push({ color: "#FFFFFF", id: uuidv4() });
      }
    };

    generateGrid();
    setGrid(squares);
  }, []);

  const handleRefresh = () => {
    const refreshedGrid = grid.map((square) => {
      return { ...square, color: "#FFFFFF" };
    });
    setGrid(refreshedGrid);
  };

  const handleClick = (id) => {
    const newGrid = grid.map((square) => {
      if (square.id === id) {
        return { ...square, color: square.color === "#FFFFFF" ? selectedColor : "#FFFFFF" };
      }
      return square;
    });

    setGrid(newGrid);
  };

  // useEffect(() => {
  //   getCanvasWidth();
  // }, [windowDimensions]);

  return (
    <Fragment>
      <div className='container-drawingWindow'>
        <div className='containerDrawing' style={divStyle}>
          {grid &&
            grid.map((item, idx) => {
              return (
                <Square
                  key={idx}
                  color={item.color}
                  id={item.id}
                  selectedColor={selectedColor}
                  handleClick={handleClick}
                />
              );
            })}
        </div>
      </div>
      <div className='refresh-btn' onClick={() => handleRefresh()}>
        Clear Board
      </div>
    </Fragment>
  );
};

export default DrawingWindow;
