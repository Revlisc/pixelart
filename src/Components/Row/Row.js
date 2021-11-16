import React from 'react'
import Dot from '../Dot/Dot'
import './row.css'

const Row = ({panelLength, selectedColor}) => {
    
    let dots = []

    for (let i = 0; i < panelLength; i++) {
        dots.push(<Dot key={i} selectedColor={selectedColor} />)
    }
    return (
        <div className='dots'>
            
            {dots}
        </div>
    )
}

export default Row
