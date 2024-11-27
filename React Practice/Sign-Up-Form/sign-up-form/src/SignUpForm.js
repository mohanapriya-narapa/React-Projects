import React, {useState} from 'react'

function SignUpForm() {
  const [form, setForm]=useState({
    userName:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const handleChange=(e)=>{
const {name, value}=e.target;
setForm({...form, [name]:value})
  }
  const handleSubmit=async ()=>{
    try{
const response =await fetch("https://www.greatfrontend.com/api/questions/sign-up",{
  method:"POST",
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    userName:form.userName,
    email:form.email,
    password:form.password,
    confirmPassword:form.confirmPassword
  })
})
    }
    catch(error){
console.log(error)
    }
  }
  return (
  <form onSubmit={handleSubmit}>
<div>
<label>User name</label>
<input type="text" name="userName" value={form.userName} onChange={handleChange}></input>
</div>

<div>
<label>Email</label>
<input type="email" name="email" value={form.email} onChange={handleChange}></input>
</div>
<div>
<label>Password</label>
<input type="password" name="password" value={form.password} onChange={handleChange}></input>
</div>
<div>
<label>Confirm Password</label>
<input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange}></input>
</div>
<button type="submit">Sign up</button>
  </form>
  );
}

export default SignUpForm;