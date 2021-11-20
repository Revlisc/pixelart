import React, { useState, Fragment, useEffect } from "react";
import DrawingWindow from "../DrawingWindow/DrawingWindow";
import "./Panel.css";
import FilePicker from "../FilePicker/FilePicker";
import ColorScheme from "../ColorScheme/ColorScheme";
import { ColorExtractor } from "react-color-extractor";

const Panel = () => {
  const [selectedColor, setSelectedColor] = useState("#f44332");
  const [images, setImages] = useState({ imageGuides: [] });
  const [extractedColors, setExtractedColors] = useState("");
  console.log(extractedColors);
  const updateUploadedFiles = (files) => {
    setImages({ ...images, imageGuides: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  let url = "";
  if (images.imageGuides.length > 0) {
    let blob = URL.createObjectURL(images.imageGuides[0]);
    url = blob;
  }
  return (
    <Fragment>
      <h1 className='dashTitle'>LET'S MAKE SOME GLOW ART</h1>

      <div className='container'>
        <div className='left'>
          <form onSubmit={handleSubmit}>
            <FilePicker
              accept='.jpg,.png,.jpeg'
              label='Images'
              updateFilesCb={updateUploadedFiles}
            />
          </form>
          <ColorExtractor src={url} getColors={(colors) => setExtractedColors(colors)} />;
          {/* <img src={url}></img> */}
          <ColorScheme handleColorChange={handleColorChange} selectedColor={selectedColor} />
        </div>
        <div className='right'>
          <DrawingWindow selectedColor={selectedColor} />
        </div>
      </div>
    </Fragment>
  );
};

export default Panel;
