import React,{useEffect, useState} from 'react'
let intervalId=null;

function CountdownTimer() {
    const [time, setTime]=useState(60);
    const[isActive, setIsActive]=useState(false);
  
    const startTimer =()=>{
if(!isActive && time>0)
{
    setIsActive(time);
    intervalId=setInterval(()=>{
        setTime((prevTime)=>Math.max(prevTime-1,0));
    }, 1000)
}
    }
    const pauseTimer =()=>{
if(isActive)
{
    clearInterval(intervalId);
    setIsActive(false);
}
    }
    const resetTimer =()=>{
        clearInterval(intervalId);
        setTime(60);
        setIsActive(false);
    }
useEffect(()=>{
    return ()=>clearInterval(intervalId);
},[]);
  return (
    <div>
        <h1> {time>0? time:"time is up"} </h1>
        <button onClick= {startTimer}>
Start
        </button>
        <button onClick= {pauseTimer}>
Pause
        </button>
        <button onClick={resetTimer}>
Reset
        </button>
    </div>
  )
}

export default CountdownTimer