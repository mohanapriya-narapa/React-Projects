import React, {useState, useEffect} from 'react'
import './Modal.css'

function CustomModal({ onClose, children}) {
    useEffect(()=>{
        const handleEscape=(e)=>{
            if(e.key=="Escape") onClose()
            }
                window.addEventListener('keydown', handleEscape)
            
        
        return ()=>window.removeEventListener('keydown', handleEscape)
    },[onClose])
  return (
    <div className='modal-backdrop' onClick={onClose}>
        <div className='modal-content' onClick={(e)=>e.stopPropagation()}>
            {children}
            <button onClick={onClose}>Close </button>
        </div>
    </div>
  );
}

export default CustomModal;
