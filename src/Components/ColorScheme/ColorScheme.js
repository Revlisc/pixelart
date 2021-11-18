import React, { useState, Fragment } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import "./ColorScheme.css";

const ColorScheme = ({ handleColorChange }) => {
  const [pallete, setPallete] = useState([
    "#bada55",
    "#A6B7DA",
    "#dddddd",
    "#dddddd",
    "#dddddd",
    "#bada55",
    "#A6B7DA",
    "#dddddd",
    "#dddddd",
    "#dddddd",
  ]);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const addNewColor = (color) => {
    setPallete([...pallete, color]);
    setShowColorPicker(false);
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
        <div className='delete-color'>Delete Color</div>
      </div>
      {showColorPicker && <ColorPicker addNewColor={addNewColor} />}
    </Fragment>
  );
};

export default ColorScheme;
