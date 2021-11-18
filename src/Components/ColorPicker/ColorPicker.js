import React, { useState, Fragment } from "react";
import { ChromePicker } from "react-color";

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

export default ColorPicker;
