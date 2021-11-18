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
        <div className='container'>
            <DrawingWindow panelLength={panelLength} />
            <form onSubmit={handleSubmit}>
                <FilePicker accept='.jpg,.png,.jpeg' label='Images' updateFilesCb={updateUploadedFiles} />
                
            </form>
        </div>
    )
}

export default Panel
