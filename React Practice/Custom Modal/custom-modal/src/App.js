import CustomModal from './CustomModal';
import './App.css';
import React, {useState} from 'react'

function App() {
const [open, setopen]=useState(false)
const handleOpen=()=>{
  setopen(true)
}
  return (
    <div className="App">
     <button onClick={handleOpen}>Open Modal</button>
     { open && <CustomModal onClose={()=>setopen(false)}>
        <h1>Modal Content</h1>
        <p>This is dynamic modal</p>
      </CustomModal>}
    </div>
  );
}

export default App;
