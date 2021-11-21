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

  const colorPickerSample = {
    height: "70px",
    width: "70px",
    borderRadius: "25%",
    backgroundColor: `${color}`,
    alignSelf: "center",
  };

  return (
    <Fragment>
      <div className='color-picker'>
        <div style={colorPickerSample}></div>
        <div className='add-color' onClick={() => addNewColor(color)}>
          Add this
        </div>
        <SliderPicker color={color} onChangeComplete={handleChangeComplete} />
      </div>
    </Fragment>
  );
};

export default ColorPicker;
