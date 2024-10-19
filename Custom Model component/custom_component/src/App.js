import logo from './logo.svg';
import './App.css';
import Modal from './Modal.js'
import React,{useState} from 'react'

function App() {
  const [isModalOpen, setModalOpen]= useState(false);
  return (
    <div className="App">
      <button onClick={()=>setModalOpen(true)}> Open Modal</button>
<Modal isOpen ={isModalOpen} onclose={()=> setModalOpen(false)}>
<h1> Modal Content </h1>
<p>This is dynamic modal</p>
</Modal>
    </div>
  );
}

export default App;
