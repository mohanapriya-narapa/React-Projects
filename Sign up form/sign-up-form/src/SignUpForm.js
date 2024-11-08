import React, {useState} from 'react'

function SignUpForm() {
const [form, setForm]=useState({
    username:"",
    email:"",
password:"",
confirmPassword:""
})
const [apiError, setApiError]=useState("")
const [errors, setErrors]=useState({
    username:"",
    email:"",
password:"",
confirmPassword:"" 
})
const validateUsername=(username)=>{
const userNameRegex=/^[a-zA-Z0-9]+$/;
if(username.length<4)
{
    return "Username must be at least 4 characters";
}
if(!userNameRegex.test(username))
    return "Username must be alphanumeric";
return "";
}
const validateEmail=(email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email))
        return "Invalid email format"
    return ""
}
const validatePassword=(password)=>{
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
}
const validateConfirmPassword=(confirmPassword,password )=>{
    if (confirmPassword !== password) return "Passwords do not match";
    return "";

}
const handleChange=(e)=>{
const {name, value}=e.target;
setForm({...form, [name]:value})
}
const handleSubmit=async (e)=>{
e.preventDefault();
const userNameError=validateUsername(form.username)
const emailError=validateEmail(form.email)
const passwordError=validatePassword(form.password)
const confirmPasswordError=validateConfirmPassword(form.confirmPassword, form.password)
setErrors({
    username:userNameError,
    email:emailError,
password:passwordError,
confirmPassword:confirmPasswordError
})
if(!userNameError && !emailError && !passwordError && !confirmPasswordError)
{
   try{
const response=await fetch('https://www.greatfrontend.com/api/questions/sign-up',{
    method:"POST",
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify({
        username:form.username,
        email:form.email,
    password:form.password,
    password_confirm:form.confirmPassword
    })
})
if(!response.ok)
{
    throw new Error("Error submitting the form.");
}  alert("Signup successful!");
   } 
   catch(error){
    setApiError("Error submitting the form. Please try again.");
   }
}
}
  return (
   <form onSubmit={handleSubmit}>
<div>
    <label>
Username
    </label>
    <input type="text" name="username" value={form.username} onChange={handleChange}>
    </input>
    {errors.username && <p className="error">{errors.username}</p>}
</div>
<div>
    <label>
Email
    </label>
    <input type="email" name="email" value={form.email} onChange={handleChange}>
    </input>
    {errors.email && <p className="error">{errors.email}</p>}
</div>
<div>
    <label>
Password
    </label>
    <input type="password" name="password" value={form.password} onChange={handleChange}>
    </input>
    {errors.password && <p className="error">{errors.password}</p>}
</div>
<div>
    <label>
    Confirm Password
    </label>
    <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange}>
    </input>
    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
</div>
<button type="submit">Sign Up</button>
{apiError && <p>{apiError}</p>}
   </form>
  );
}

export default SignUpForm;
