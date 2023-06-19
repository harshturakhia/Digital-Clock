import React from "react";
import './index.css';
import { useState } from "react";


const App = () => {

    let time = new Date().toLocaleTimeString()
    const [currTime, setCurrTime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setCurrTime(time)
    };

    setInterval(updateTime, 1000);
        
    return (
        <>
        <h1 className='heading'> {currTime} </h1>
        {/* <button className='btn' id='btn' onClick={updateTime}>Get Time</button> */}
        </>
    )
}

export default App;