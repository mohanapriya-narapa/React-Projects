import React, {useState, useEffect} from 'react'
import './ProgressBar.css'
function CustomProgressBar() {
    // const [startTransition, setTransition]=useState(false);
//     useEffect(()=>{
// const timer=setTimeout(()=>{
//     setTransition(true);
// }
// ,10)
const [progress, setProgress]=useState(0)
useEffect(()=>{
const interval= setInterval(()=>{
  setProgress((prev)=>prev<100?prev+10:100)
},1000)
return(()=>clearInterval(interval))
},[])

  return (
    <div className='bar'>
 <div className='bar-contents' style={{width:`${progress}%`}}></div>
    </div>
  );
}

export default CustomProgressBar;
