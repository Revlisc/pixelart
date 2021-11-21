import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Intro from '../Components/Intro/Intro'
import Demo from '../Components/Demo/Demo'
import Contact from '../Components/Contact/Contact'

import './landingPage.css'

const landingPage = () => {
    return (
        <div className='landingPage'>
            <NavBar />
            <Intro />
            <Demo />
            <Contact />
        </div>
    )
}

export default landingPage
