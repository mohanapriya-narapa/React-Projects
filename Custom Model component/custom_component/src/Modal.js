import React,{useEffect} from 'react'
import './index.css'

function Modal({isOpen, onclose, children}) {

    useEffect(()=>{
        const handleEscape =(e)=>{
            if(e.key==="Escape") onclose();
        }
        window.addEventListener('keydown', handleEscape);
        return ()=>window.removeEventListener('keydown', handleEscape);
    }, [onclose])

    if(!isOpen) return;

  return (
    <div className="modal-backdrop" onClick={onclose}>
<div className= "modal-content" onClick={(e) => e.stopPropagation()} >
    {children}
    <button onClick ={onclose}> Close</button>
</div>
    </div>
  )
}

export default Modal