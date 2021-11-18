import React, { useState, useEffect, Fragment } from "react";
// import Row from "../Row/Row";
import "./drawingwindow.css";
import Square from "../Square/Square";
import { v4 as uuidv4 } from "uuid";
import { ChromePicker } from "react-color";

const getWindowDimentions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    height,
    width,
  };
};

const CanvasSizePicker = () => {};

const ColorPicker = ({ addNewColor }) => {
  const [color, setColor] = useState("");
  //color picker is a controlled component, when state changes, pass the color value to the parent state selectedColor
  // useEffect(() => {
  //   addNewColor(color);
  // }, [color]);
  const handleChangeComplete = (color) => {
    setColor(color.hex);
    console.log("change complete");
  };

  const colorPickerSample = {
    height: "30px",
    width: "30px",
    borderRadius: "25%",
    backgroundColor: `${color}`,
  };

  return (
    <Fragment>
      <div className='color-picker'>
        <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
        <div style={colorPickerSample}></div>
        <div className='add-color' onClick={() => addNewColor(color)}>
          Add this
        </div>
      </div>
    </Fragment>
  );
};

const ColorScheme = ({ handleColorChange }) => {
  const [pallete, setPallete] = useState(["#bada55", "#A6B7DA"]);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const addNewColor = (color) => {
    setPallete([...pallete, color]);
  };

  return (
    <Fragment>
      <div className='color-pallete'>
        {pallete.map((color, idx) => {
          return (
            <div
              key={idx}
              className='color-item'
              style={{ backgroundColor: `${color}` }}
              onClick={() => handleColorChange(color)}></div>
          );
        })}
        <div className='add-new-color' onClick={() => setShowColorPicker(!showColorPicker)}>
          Add new color
        </div>
      </div>
      {showColorPicker && <ColorPicker addNewColor={addNewColor} />}
    </Fragment>
  );
};

const DrawingWindow = () => {
  const [grid, setGrid] = useState();
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimentions());
  const [canvasWidth, setCanvasWidth] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const getCanvasWidth = () => {
    //should be 75% of viewport height?
    let adjustedWidth = Math.floor(windowDimensions.width * 0.75);
    setCanvasWidth(adjustedWidth);
  };

  const divStyle = {
    height: "500px",
    width: `900px`, //${canvasWidth}px
    display: "grid",
    border: "1px solid black",
    gridTemplateColumns: "repeat(auto-fill, 25px)",
    gridTemplateRows: "repeat(auto-fill, 25px)",
  };

  let squares = [];

  const generateGrid = () => {
    for (let i = 0; i < 720; i++) {
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

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

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
      <div className='colors-container'>
        {/* <ColorPicker handleColorChange={handleColorChange} /> */}
        <ColorScheme handleColorChange={handleColorChange} />
      </div>
    </Fragment>
  );
};

export default DrawingWindow;
