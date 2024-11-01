import logo from './logo.svg';
import React, { useState } from 'react'

function Accordian({sections}) {
const [open, setOpen]=useState({})
const toggleSelection=(index)=>{
    debugger;
setOpen((prev)=>({
...prev,
[index]:!prev[index],
}))
}

  return (
    <div className="App">
  {sections.map((section,index)=>(
    <div key={index}>
<button onClick={()=>toggleSelection(index)}>
{section.title}
</button>
{open[index]&& <div>{section.contents}</div>}
    </div>
  ))

  } 
    </div>
  );
}

export default Accordian;