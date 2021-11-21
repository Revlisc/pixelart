import React, { useState, Fragment } from "react";
import { SliderPicker } from "react-color";
import "./ColorPicker.css";

const ColorPicker = ({ addNewColor }) => {
  const [color, setColor] = useState("#ffffff");
  //color picker is a controlled component, when state changes, pass the color value to the parent state selectedColor
  // useEffect(() => {
  //   addNewColor(color);
  // }, [color]);
  const handleChangeComplete = (color) => {
    setColor(color.hex);
    console.log("change complete");
  };

  const addColorButton = {
    alignSelf: "center",
    backgroundColor: `${color}`,
    padding: "0.5rem",
    borderRadius: "12px",
    margin: "10px 0",
    position: "relative",
    width: "50px",
    height: "50px",
    // color: "hsl(231,77%,90%)",
  };

  return (
    <Fragment>
      <div className='color-picker'>
        {/* <div style={colorPickerSample}></div> */}
        <div className='add-color' style={addColorButton}>
          <div className='add-plus' onClick={() => addNewColor(color)}>
            <i className='fa fa-plus'></i>
          </div>
        </div>
        <SliderPicker color={color} onChangeComplete={handleChangeComplete} />
      </div>
    </Fragment>
  );
};

export default ColorPicker;
