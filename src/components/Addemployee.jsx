import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Addemployee() {
    const [addmsg, setAddmsg] = useState({})
    const [employee, setEmployee] =  useState({firstname:"",lastname:"", email:"",department:"",salary:""});
          const navigate  = useNavigate()
    const gotodashboard = ()=>{
              navigate("/dashboard");
           } 
    const handleAdd = ()=>{
        const {firstname,lastname, email,department,salary} =  employee;
        const payload = {firstname,lastname, email,department,salary}
         console.log(email)
       if(firstname && lastname && email && department && salary){

   fetch("https://embackend.onrender.com/employees/create", {
     method : "POST",
     headers : {'Content-Type':'application/json' ,
    
        'Authorization' : `Bearer ${localStorage.getItem("EmToken")}`
      },
     body : JSON.stringify(payload)
   }).then((res)=>res.json())
   .then((res)=>{console.log(res); setAddmsg(res)})
   .catch((err)=>console.log(err.message))
   
   const myTimeout = setTimeout(gotodashboard, 3000)
 }
 else{
// setflag(true);
 }
 }

  return (
    
    <div>
<h1>Add Employee</h1>
{addmsg.msg ? <h2>{addmsg.msg}</h2>:null}
<input type="text" placeholder='firstname' onChange={(e)=>{setEmployee({...employee,firstname:e.target.value})}}/> <br /> 
<input type="text" placeholder='lastname' onChange={(e)=>{setEmployee({...employee,lastname:e.target.value})}} /> <br /> 
<input type="email" placeholder='email' onChange={(e)=>{setEmployee({...employee,email:e.target.value})}}/> <br />
<input type="text" placeholder='department' onChange={(e)=>{setEmployee({...employee,department:e.target.value})}}/> <br /> 
<input type="number" placeholder='salary' onChange={(e)=>{setEmployee({...employee,salary:e.target.value})}} /> <br /> 
  
  <button onClick={handleAdd}>Add</button>
   </div>
  )
}

export default Addemployee