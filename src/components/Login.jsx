import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [credential, setCredential] = useState({email:"",password:""})
const navigate = useNavigate();
    const handlelogin  = ()=>{


        const {email, password} =  credential;
        const payload = {email, password}
  
       if(email &&password){
   fetch("https://embackend.onrender.com/user/login", {
     method : "POST",
     headers : {'Content-Type':'application/json' },
     body : JSON.stringify(payload)
   }).then((res)=>res.json())
   .then((res)=>{if(res.token){localStorage.setItem("EmToken",res.token); 
   navigate("/dashboard");
  }
  else{
  
  }})
   .catch((err)=>console.log(err))

  
    }
   
  }
  return (
    
    <div>
    <br /> <br />
<h2>Login</h2>
<input type="email" placeholder='Please Enter Email' onChange={(e)=>{setCredential({...credential,email:e.target.value})}}/> <br /> 
<input type="password" placeholder='Password' onChange={(e)=>{setCredential({...credential,password:e.target.value})}}/> <br /> 
<button onClick={ handlelogin}>login</button>

<p>Don't have account ? <Link to="/signup"><span> Click here </span></Link> to Signup</p>

</div>
  )
}

export default Login