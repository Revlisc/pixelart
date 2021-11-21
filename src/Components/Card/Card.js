import React from 'react'
import './Card.css'
const Card = ({img, name, text}) => {
    return (
        <div className='card'>

            <img src={img} alt='creator' className='cardImg'/>
            <div className='cardTextBox'>
                <h1 className='cardName'>{name}</h1>
                <p className='cardText'>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Card
