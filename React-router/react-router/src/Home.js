import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate=useNavigate();
  return (
    <div>
Home
<button style={{width:'100px'}} onClick={()=>navigate("/about")}> About </button>
<button onClick={()=>navigate("/welcome")}> Welcome</button>
    </div>
  );
}

export default Home;