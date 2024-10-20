import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [errors, setErrors]=useState('');

const validationForm=()=>{
  const validationErrors={};
  if(!name){
    validationErrors.name="Name is required";
  }
  if(!email){
    validationErrors.email="Email is required";
  }
  if (password.length < 6) {
    validationErrors.password = 'Password must be at least 6 characters long';
  }
return validationErrors;
}
const handleSubmit =(e)=>
{e.preventDefault()
  const validationErrors=validationForm();
  setErrors(validationErrors);
  if(Object.keys(validationErrors).length==0)
  {
    alert("form submission successful")
  }
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)}></input>
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="text" value={password} onChange={e=>setPassword(e.target.value)}></input>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
