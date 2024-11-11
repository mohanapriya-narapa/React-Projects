import React, { useState } from 'react';
import CustomModal from './CustomModal'

function App() {
  const [open,setOpen]=useState(false);

  return (
    <div className="App">
    <button onClick={()=>setOpen(true)}> Show Modal </button>
    {
      open && <CustomModal handleClose={()=>setOpen(false)}>
        <h1 className='model-title'>Custom Model</h1>
        <p>Contents</p>
      </CustomModal>
    }

    </div>
  );
}

export default App;
