import React, {useState} from 'react'
import Row from '../Row/Row'
import './drawingwindow.css'

const DrawingWindow = ({panelLength, selectedColor}) => {
    
    let rows = []

    for (let i = 0; i < panelLength; i++) {
        rows.push(<Row key={i} panelLength={panelLength} selectedColor={selectedColor} />)
    }
    
    return (
        <div className='containerDrawing'>
            <div className='row'>
                
                {rows}
            </div>
        </div>
    )
}

export default DrawingWindow
