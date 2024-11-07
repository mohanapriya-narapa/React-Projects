import React, {useState, useEffect} from 'react'
import './ProgressBar.css'
function CustomProgressBar() {
    const [startTransition, setTransition]=useState(false);
    useEffect(()=>{
const timer=setTimeout(()=>{
    setTransition(true);
}
,10)

return(()=>{clearTimeout(timer)});
    },[])
  return (
    <div className='bar'>
 <div className={`bar-contents ${startTransition?'bar-contents-filled':''}`}></div>
    </div>
  );
}

export default CustomProgressBar;
