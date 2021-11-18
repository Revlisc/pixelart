import React, { useState, Fragment } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";

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

export default ColorScheme;
