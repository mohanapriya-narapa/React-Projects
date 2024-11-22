import React, {useState, useEffect} from 'react'
import './TrafficLight.css'

function TrafficLights() {
    const [activeLight, setActiveLight] =useState(null)
    const handleLightClick=(color)=>{
        setActiveLight(color)
    }
  return (
    <div className="traffic-lights">
<button className={`light ${activeLight==="red"?"red":"off"}`} onClick={()=>handleLightClick("red")}>

</button>
<button className={`light ${activeLight==="yellow"?"yellow":"off"}`} onClick={()=>handleLightClick("yellow")}>

</button>
<button className={`light ${activeLight==="green"?"green":"off"}`} onClick={()=>handleLightClick("green")}>

</button>
    </div>
  );
}

export default TrafficLights;
