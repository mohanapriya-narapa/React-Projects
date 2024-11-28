import React,{useState, useEffect} from 'react'

let intervalId=null;
function CountDown() {
    const [timer, setTimer]=useState(60)
    const [isActive, setActive]=useState(false)
    const startTimer=()=>{
if(!isActive && timer>0)
{
    setActive(true)
intervalId=setInterval(()=>{
    setTimer((prevTime)=>Math.max(prevTime-1,0))
},1000)
}
    }
    const pauseTimer=()=>{
if(isActive)
{
    clearInterval(intervalId) 
    setActive(false)
}
    }
    const resetTimer=()=>{
        if(isActive)
            {
                clearInterval(intervalId) 
                setActive(false)
                setTimer(60)
            }
    }
    useEffect(()=>{
       return ()=>clearInterval(intervalId) 
    }, [])
  return (
    <div>
        <h1>{timer>0? timer:"Time is up"}</h1>
<button onClick={startTimer}>
Start
</button>
<button onClick={pauseTimer}>
Pause
</button>
<button onClick={resetTimer}>
Reset
</button>
    </div>
  );
}

export default CountDown;
