import './App.css';

import CustomProgressBar from './CustomProgressBar';
import { useState } from 'react';

function App() {
  const[bars, setBars]=useState(0);
  return (
    <div className='wrapper' >
        <button onClick={() => setBars(bars + 1)}>Add</button>
      <div className='bars'>

 {
  [...Array(bars).keys()].map(index=>(
    <CustomProgressBar></CustomProgressBar> 
  ))

 }
 </div>
    </div>
  );
}

export default App;
