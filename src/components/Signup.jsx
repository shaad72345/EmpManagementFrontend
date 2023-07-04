import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
function Signup() {
    const [signup, setSignup] =  useState({email:"",password:"", confirmpassword:""});

    const handleSignup = ()=>{
        const {email, password, confirmpassword} =  signup;
        const payload = {email, password, confirmpassword}
        // console.log(email,password, confirmpassword)
       if(email && password && confirmpassword){

   fetch("https://embackend.onrender.com/user/signup", {
     method : "POST",
     headers : {'Content-Type':'application/json' },
     body : JSON.stringify(payload)
   }).then((res)=>res.json())
   .then((res)=>console.log(res))
   .catch((err)=>console.log(err.message))

//    const myTimeout = setTimeout(gotologin, 3000)
 }
 else{
// setflag(true);
 }
 }
  return (
    <div>
    <br /> <br />
<h2>Signup</h2>
<input type="email" placeholder='Email' onChange={(e)=>{setSignup({...signup,email:e.target.value})}}/> <br /> 
<input type="password" placeholder='Password' onChange={(e)=>{setSignup({...signup,password:e.target.value})}} /> <br /> 
<input type="password" placeholder='Confirm password' onChange={(e)=>{setSignup({...signup,confirmpassword:e.target.value})}}/> <br />
<button  onClick={handleSignup} >Signup</button>

<p>Already have account ? <Link to="/login"><span> Click here </span></Link> to Login</p>
</div>
  )
}

export default Signup