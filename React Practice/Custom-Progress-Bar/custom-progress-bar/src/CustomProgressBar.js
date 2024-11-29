import React, {useState, useEffect} from 'react'
import './ProgressBar.css'
function CustomProgressBar() {
    const [progress, setProgress]=useState(0)
    useEffect(()=>{
const interval =setInterval(()=>{
    setProgress((prev)=>prev+10>100?100:prev+10)
},1000)
return (()=>clearInterval(interval))
    })
  return (
    <div className='bar'>
<div className='bar-content' style={{width:`${progress}%`}}></div>
    </div>
  );
}

export default CustomProgressBar;