import React, { useState, useEffect, Fragment } from "react";
// import Row from "../Row/Row";
import "./drawingwindow.css";
import Square from "../Square/Square";

import { v4 as uuidv4 } from "uuid";

const getWindowDimentions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    height,
    width,
  };
};

const DrawingWindow = ({ selectedColor }) => {
  const [grid, setGrid] = useState();
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimentions());
  const [canvasWidth, setCanvasWidth] = useState("");

  const getCanvasWidth = () => {
    //should be 75% of viewport height?
    let adjustedWidth = Math.floor(windowDimensions.width * 0.75);
    setCanvasWidth(adjustedWidth);
  };

  const divStyle = {
    height: "500px",
    width: `500px`, //${canvasWidth}px
    display: "grid",
    border: "1px solid black",
    gridTemplateColumns: "repeat(auto-fill, 25px)",
    gridTemplateRows: "repeat(auto-fill, 25px)",
  };

  let squares = [];

  const generateGrid = () => {
    for (let i = 0; i < 400; i++) {
      squares.push({});
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimentions());
    };

    window.addEventListener("resize", handleResize);

    getCanvasWidth();

    generateGrid();
    setGrid(squares);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getCanvasWidth();
  }, [windowDimensions]);

  return (
    <Fragment>
      <div className='container-drawingWindow'>
        <div className='containerDrawing' style={divStyle}>
          {/* {grid} */}
          {grid &&
            grid.map((item, idx) => {
              return <Square key={idx} id={uuidv4()} selectedColor={selectedColor} />;
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default DrawingWindow;
