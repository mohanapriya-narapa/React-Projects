import React, {useEffect, useState} from 'react'
import './index.css'

function CustomModal({children, handleClose}) {
  useEffect(()=>{
const handleEscape=(event)=>{
  if(event.key === 'Escape'){
    handleClose();
  }
}
document.addEventListener('keydown', handleEscape)
return(()=>{
  document.removeEventListener('keydown', handleEscape)
})
  },[handleClose])
  return (
    <div className='modal-overlay'  onClick={handleClose}>
     <div className='modal-content' onClick={(e)=>e.stopPropagation()}>

{children}
<button className='button-style' onClick={handleClose}>Close</button>
     </div>
    </div>
  );
}

export default CustomModal
