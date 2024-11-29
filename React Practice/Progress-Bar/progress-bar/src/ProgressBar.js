import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import './ProgressBar.css'

function ProgressBar() {
    const [progress, setProgress]=useState(0);
    useEffect(()=>{
const interval=setInterval(()=>{
setProgress(prev=>prev+10>100?100:prev+10)
}, 1000)
return ()=>clearInterval(interval)
    })
  return (
    <div className='bar'>
<div className='bar-contents' style={{width:`${progress}%`}}> 
<span className='progress-text'>{progress}</span>
</div>

    </div>
  );
}

export default ProgressBar;
