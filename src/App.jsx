import { useState } from 'react'
import './App.css'
import LeftSide from "./Components/LeftSide.jsx";
import RightSide from "./Components/RightSide.jsx";

function App() {

    return (
    <div className='app-container'>
        <LeftSide className='leftside'/>
        <RightSide className='rightside'/>
    </div>
  )
}

export default App
