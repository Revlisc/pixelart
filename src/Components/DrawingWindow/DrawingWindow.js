import React, { useState, useEffect, Fragment } from "react";
// import Row from "../Row/Row";
import "./drawingwindow.css";

const getWindowDimentions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    height,
    width,
  };
};

export const Square = () => {
  return <div className='square'></div>;
};

const CanvasSizePicker = () => {};

const DrawingWindow = ({ panelLength, selectedColor }) => {
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
    width: `900px`,
    display: "grid",
    border: "1px solid black",
    gridTemplateColumns: "repeat(auto-fill, 25px)",
    gridTemplateRows: "repeat(auto-fill, 25px)",
  };

  let squares = [];

  useEffect(() => {
    const generateGrid = () => {
      for (let i = 0; i < 720; i++) {
        squares.push(<Square />);
      }
    };

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

  console.log(canvasWidth);

  return (
    <Fragment>
      <div className='container-drawingWindow'>
        <div className='containerDrawing' style={divStyle}>
          {grid}
        </div>
      </div>
    </Fragment>
  );
};

export default DrawingWindow;
