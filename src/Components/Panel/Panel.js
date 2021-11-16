import React, {useState} from 'react'
import DrawingWindow from '../DrawingWindow/DrawingWindow'
import './Panel.css'

const Panel = () => {
    const [panelLength, setPanelLength] = useState(160)
    const [selectedColor, setSelectedColor] = useState('#f44332')
    
    return (
        <div className='container'>
            <DrawingWindow panelLength={panelLength} />
            
        </div>
    )
}

export default Panel
