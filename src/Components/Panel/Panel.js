import React, { useState, Fragment, useEffect } from "react";
import DrawingWindow from "../DrawingWindow/DrawingWindow";
import "./Panel.css";
import FilePicker from "../FilePicker/FilePicker";
import ColorScheme from "../ColorScheme/ColorScheme";
import { ColorExtractor } from 'react-color-extractor'
import { Link } from "react-router-dom";

const Panel = () => {
  const [selectedColor, setSelectedColor] = useState("#f44332");
  const [images, setImages] = useState({ imageGuides: [] });
  const [extractedColors, setExtractedColors] = useState("");
  const [url, setUrl] = useState("");

  //const [pallete, setPallete] = useState("");
  console.log(extractedColors);

  useEffect(() => {
    if (images.imageGuides.length > 0) {
      setUrl(URL.createObjectURL(images.imageGuides[0]));
      
    } else {
      setUrl("");
      setExtractedColors("");
    }
  }, [images]);

    const updateUploadedFiles = (files) => setImages({...images, imageGuides: files})
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const addNewColor = (color) => {
        setExtractedColors([...extractedColors, color]);
        //setShowColorPicker(false);
      };
    
    const handleDelete = (color) => {
        console.log(color);
        const newPallete = extractedColors.filter((item) => item !== color);
    
        setExtractedColors(newPallete);
    };

  return (
    <Fragment>
      
      <Link to='/' className='link'><h1 className='dashTitle'>Let's Make Some</h1></Link>
      <Link to='/' className='link'><h1 className='dashTitle'>Glow Art</h1></Link>
      
      <div className='container'>
        <div className='left'>
          <form onSubmit={handleSubmit} className='form'>
            <FilePicker
              accept='.jpg,.png,.jpeg'
              label='Images'
              updateFilesCb={updateUploadedFiles}
            />
          </form>
          {images.imageGuides.length > 0 &&
            <ColorExtractor src={url} getColors={(colors) => setExtractedColors(colors)} />
          }
          <ColorScheme
            handleColorChange={handleColorChange}
            selectedColor={selectedColor}
            extractedColors={extractedColors}
            handleDelete={handleDelete}
            addNewColor={addNewColor}
            
          />
        </div>
        <div className='right'>
          <DrawingWindow selectedColor={selectedColor} />
        </div>
      </div>
    </Fragment>
  );
};

export default Panel;
