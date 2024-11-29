import './App.css';
import React, {useState} from 'react'
import CustomProgressBar from './CustomProgressBar'

function App() {
  const [bars,setBars]=useState(0)
  return (
    <div className="wrapper">
      <button onClick={()=>setBars(bars+1)}>Add</button>
      <div className="container">
        {
          [...Array(bars).keys()].map(index=>( <CustomProgressBar></CustomProgressBar>))
        }
     
      
      </div>

    </div>
  );
}

export default App;
