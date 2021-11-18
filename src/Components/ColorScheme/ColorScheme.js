import React, { useState, Fragment } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import { v4 as uuidv4 } from "uuid";
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
  const [showDeleteBtns, setShowDeleteBtns] = useState(false);

  const addNewColor = (color) => {
    setPallete([...pallete, color]);
    setShowColorPicker(false);
  };

  const handleDelete = (color) => {
    console.log(color);
    const newPallete = pallete.filter((item) => item !== color);

    setPallete(newPallete);
  };

  return (
    <Fragment>
      <div className='color-pallete'>
        {pallete.map((color, idx) => {
          return (
            <div
              key={idx}
              id={uuidv4()}
              className='color-item'
              style={{ backgroundColor: `${color}`, position: "relative" }}
              onClick={() => handleColorChange(color)}>
              {showDeleteBtns && (
                <div className='delete-color-btn' onClick={() => handleDelete(color)}>
                  X
                </div>
              )}
            </div>
          );
        })}
        <div className='add-new-color' onClick={() => setShowColorPicker(!showColorPicker)}>
          Add new color
        </div>
        <div className='delete-color' onClick={() => setShowDeleteBtns(true)}>
          Delete Color
        </div>
      </div>
      {showColorPicker && <ColorPicker addNewColor={addNewColor} />}
    </Fragment>
  );
};

export default ColorScheme;
