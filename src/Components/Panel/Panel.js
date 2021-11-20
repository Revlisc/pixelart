import React, { useState, Fragment, useEffect } from "react";
import DrawingWindow from "../DrawingWindow/DrawingWindow";
import "./Panel.css";
import FilePicker from "../FilePicker/FilePicker";
import ColorScheme from "../ColorScheme/ColorScheme";
import { ColorExtractor } from 'react-color-extractor'

const Panel = () => {
    const [panelLength, setPanelLength] = useState(160);
    const [selectedColor, setSelectedColor] = useState("#f44332");
    const [extractedColors, setExtractedColors] = useState("");
    const [images, setImages] = useState({ imageGuides: [] });
    const [files, setFiles] = useState({})
    const [colors, setColors] = useState([])
//images.length === 1 ? URL.createObjectURL(new File([images?.imageGuides[0]], 'test')) : null
    //console.log(images)

    const renderColors = () => {
        return colors.map((color, id) => {
            return (
                <div key={id} style={{backgroundColor: color, width: 100, height: 100}} />
            )
        })
    }

    const updateUploadedFiles = (files) => setImages({...images, imageGuides: files})
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const getColors = (colors) => {
        setColors([...colors, colors])
    }
    let url = "";

    if (images.imageGuides.length > 0) {
        let blob = URL.createObjectURL(images.imageGuides[0]);
        url = blob;
    }
    return (
        <>
            <h1 className='dashTitle'>Let's Make Some</h1>
            <h1 className='dashTitle'>Glow Art</h1>
            <div className='container'>
                
                <div className='left'>
                    <form onSubmit={handleSubmit} className='form'>
                        <FilePicker files={files} accept='.jpg,.png,.jpeg' updateFilesCb={updateUploadedFiles}/>
                    </form>
                    <ColorScheme handleColorChange={handleColorChange} selectedColor={selectedColor} />
                    <ColorExtractor getColors={getColors} >
                        <img src={url} />
                    </ColorExtractor>
                    {renderColors()}
                </div>
                <div className='right'>
                    <DrawingWindow selectedColor={selectedColor} />
                </div>
            </div>
        </>
    )
}

export default Panel;
