import React, { useState } from "react";
import DrawingWindow from "../DrawingWindow/DrawingWindow";
import "./Panel.css";
import FilePicker from "../FilePicker/FilePicker";
import ColorScheme from "../ColorScheme/ColorScheme";

const Panel = () => {
  const [panelLength, setPanelLength] = useState(160);
  const [selectedColor, setSelectedColor] = useState("#f44332");
  const [images, setImages] = useState({ imageGuides: [] });

    const updateUploadedFiles = (files) => setImages({...images, imageGuides: files})
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
    return (
        <>
            <h1 className='dashTitle'>Let's Make Some</h1>
            <h1 className='dashTitle'>Glow Art</h1>
            <div className='container'>
                
                <div className='left'>
                    <form onSubmit={handleSubmit} className='form'>
                        <FilePicker accept='.jpg,.png,.jpeg' updateFilesCb={updateUploadedFiles} />
                    </form>
                    <ColorScheme handleColorChange={handleColorChange} selectedColor={selectedColor} />
                </div>
                <div className='right'>
                    <DrawingWindow selectedColor={selectedColor} />
                </div>
            </div>
        </>
    )
}

export default Panel;
