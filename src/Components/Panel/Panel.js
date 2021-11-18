import React, {useState} from 'react'
import DrawingWindow from '../DrawingWindow/DrawingWindow'
import './Panel.css'
import FilePicker from '../FilePicker/FilePicker'

const Panel = () => {
    const [panelLength, setPanelLength] = useState(160)
    const [selectedColor, setSelectedColor] = useState('#f44332')
    const [images, setImages] = useState({imageGuides: []})

    const updateUploadedFiles = (files) => setImages({...images, imageGuides: files})
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <h1 className='dashTitle'>Let's Make Some</h1>
            <h1 className='dashTitle'>Glow Art</h1>
            <div className='container'>
                
                <div className='left'>
                    <form onSubmit={handleSubmit} className='form'>
                        <FilePicker accept='.jpg,.png,.jpeg' updateFilesCb={updateUploadedFiles} />
                    </form>
                </div>
                <div className='right'>
                    <DrawingWindow panelLength={panelLength} />
                
                </div>
            </div>
        </>
    )
}

export default Panel
