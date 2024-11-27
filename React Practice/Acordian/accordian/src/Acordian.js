import React, {useState} from 'react'

function Acordian({sections}) {
    const [open, setOpen]=useState({})
    const handleOnClick=(index)=>{
setOpen((prev)=>({...prev, [index]:!prev[index]}))
    }
  return (
    <div>
{sections.map((section , index)=>(
   <div key={index}>
<button onClick={()=>handleOnClick(index)}>{section.title}</button>
{open[index] && <p>{section.contents}</p>}
   </div>
))
}

    </div>
  );
}

export default Acordian;