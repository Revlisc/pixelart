import React from 'react'
import './Intro.css'
import { Link } from 'react-router-dom'
import skate from '../../img/roller-skate-neon-label-vector (2).jpg'
const Intro = () => {
    return (
        <div>
            <div className='leftSideIntro'>
                <h1 className='introTitle'>Embrace Nostalgia</h1>
                <p style={{color: 'white', fontFamily: 'Poppins'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. 
                </p>
                <Link to='/panel' className='makeArtBtn'><h4 className='makeArtBtn'>Make Art Now</h4></Link>
            </div>
            <div className='rightSideIntro'>
                <img src={skate} alt='a neon rollerskate' className='introPic'/>
            </div>
            <video width='70%' height='auto' controls className='tutorialVid'>
                <source src='' type='video/mp4' />
                Your browser does not support this video content.
            </video>
        </div>
    )
}

export default Intro
