import React, {useState, useEffect} from 'react'
import './ProgressBar.css';

function ProgressBar() {
    const[progress, setProgress]=useState(0);
    useEffect(()=>{
const interval = setInterval(() => {
  setProgress((prev)=>(prev<100? prev+10:prev))  
}, 1000);

return () => clearInterval(interval);
    },[])
    const percent=Math.min(Math.max(progress,0),100);
  return (
    <div className="progress-bar-container">
     <div className="progress-bar-fill" style={{ width: `${percent}%` }}>
        <span className="progress-text">
{percent}
        </span>
     </div>
    </div>
  );
}

export default ProgressBar;
