import logo from './logo.svg';
import React from 'react'
const SUBMIT_URL = 'https://www.greatfrontend.com/api/questions/contact-form';

function ContactForm() {

async function submitForm(event)
{
event.preventDefault();
const form=event.target;
const formData=new FormData(form);
try{
const response=await fetch(SUBMIT_URL, {
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        name:formData.get('name'),
        email:formData.get('email'),
        message:formData.get('message')
    }),  
})
const text=await response.text();
}
catch(error){
    alert('Error submitting form!');

}
}


  return (
    <form action={SUBMIT_URL} method="post" onSubmit={submitForm}>
        <div>
            <label htmlFor='name' >
Name
            </label>
            <input type="text" name="name" id="name" required>
            </input>
        </div>
        <div>
            <label htmlFor='email'> Email</label>
            <input type="email" id="email" name="email" required>
            </input>
        </div>
        <div>
            <label htmlFor='message'> Message</label>
            <input type="message" id="message" name="message" required>
            </input>
        </div>
        <div>
            <button type="submit"> Submit</button>
        </div>
    </form>
    )
}

export default ContactForm;
