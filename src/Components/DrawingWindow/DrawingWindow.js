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

export const Square = ({selectedColor, handleMouseDown}) => {
  return <div className='square' style={{backgroundColor: selectedColor}} onClick={handleMouseDown}></div>;
};

const CanvasSizePicker = () => {};

const DrawingWindow = ({ panelLength }) => {
  const [grid, setGrid] = useState();
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimentions());
  const [canvasWidth, setCanvasWidth] = useState("");
  const [selectedColor, setSelectedColor] = useState('#f44332')
  const [clicked, setClicked] = useState(false)

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
        squares.push(<Square onClick={handleClick} className={clicked ? 'colored' : 'notColored'} />);
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
  }, [clicked]);

  useEffect(() => {
    getCanvasWidth();
  }, [windowDimensions]);

  console.log(canvasWidth);

  const handleClick = () => {
     
    setClicked(true)
    console.log('Clicked')
  }

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
