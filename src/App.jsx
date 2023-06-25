import React from 'react'

import Navbar from './components/Navbar'
import Body from './components/Body'

import "./styling/App.css"

const App = () => {
  return (
    <div className='container'>
        <Navbar/>
        <Body/>
    </div>
  )
}

export default App