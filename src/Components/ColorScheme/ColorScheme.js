import React, { useState, useEffect, Fragment } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import { v4 as uuidv4 } from "uuid";
import "./ColorScheme.css";

const ColorScheme = ({
  addNewColor,
  handleDelete,
  handleColorChange,
  selectedColor,
  extractedColors,
}) => {
  //const [pallete, setPallete] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showDeleteBtns, setShowDeleteBtns] = useState(false);
  console.log("extracted colors are", extractedColors);
  // useEffect(() => {
  //   setPallete(extractedColors);
  // });

  useEffect(() => {
    if (showDeleteBtns) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDeleteBtns]);

  //if click anything other than the delete icon, exit delete mode(no delete buttons)
  const handleClickOutside = (e) => {
    if (e.target.className === "fa fa-times") {
      console.log(true);
      return;
    }
    setShowDeleteBtns(false);
  };

  // const addNewColor = (color) => {
  //   setPallete([...pallete, color]);
  //   setShowColorPicker(false);
  // };

  // const handleDelete = (color) => {
  //   console.log(color);
  //   const newPallete = pallete.filter((item) => item !== color);

  //   setPallete(newPallete);
  // };

  return (
    <Fragment>
      <div className='color-pallete'>
        {extractedColors &&
          extractedColors.map((color, idx) => {
            return (
              <div
                key={idx}
                id={uuidv4()}
                className='color-item'
                style={{
                  backgroundColor: `${color}`,
                  position: "relative",
                  border: `${color === selectedColor ? "4px solid green" : "none"}`,
                }}
                onClick={() => handleColorChange(color)}>
                {showDeleteBtns && (
                  <div className='delete-color-btn' onClick={() => handleDelete(color)}>
                    <i className='fa fa-times'></i>
                  </div>
                )}
              </div>
            );
          })}
        {extractedColors.length < 10 && (
          <div className='add-new-color btn' onClick={() => setShowColorPicker(!showColorPicker)}>
            <i className='fa fa-plus'></i>
          </div>
        )}

        <div className='delete-color btn' onClick={() => setShowDeleteBtns(true)}>
          <i className='fa fa-trash'></i>
        </div>
      </div>
      {extractedColors.length < 10 && showColorPicker && <ColorPicker addNewColor={addNewColor} />}
    </Fragment>
  );
};

export default ColorScheme;
