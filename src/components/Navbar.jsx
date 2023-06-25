import React from 'react'

import "../styling/Navbar.css"

import TrollFace from "../images/TrollFace.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='title'>
            <img src={TrollFace} alt="" />
            <p>Meme Generator</p>
        </div>
        <p>React Course - Project 3</p>
    </div>
  )
}

export default Navbar