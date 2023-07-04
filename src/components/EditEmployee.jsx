import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function EditEmp() {
    const [updatemsg, setUpdatemsg] = useState({})
    const [emp , setEmp] = useState({firstname:"",lastname:"", email:"",department:"",salary:""})
    const {id}=  useParams();
    const  {firstname, lastname, email, department, salary} = emp;
    const payload ={firstname, lastname, email, department, salary};
  function handleUpdate (){
 

    fetch(`https://embackend.onrender.com/employees/update/${id}`, {
     method : "PATCH",
     headers : {'Content-Type':'application/json',
        'Authorization' : `Bearer ${localStorage.getItem("EmToken")}`
  
     },
     body : JSON.stringify(payload)
   }).then((res)=>res.json())
   .then((res)=>{console.log(res); setUpdatemsg(res)})
   .catch((err)=>console.log(err.message))

   }
  return (
    <div>
    <h1>Edit Employee Details </h1>
    { updatemsg?<h2>{updatemsg.msg}</h2>:null }
    <input type="text" placeholder='firstname' onChange={(e)=>{setEmp({...emp,firstname:e.target.value})}}/> <br /> 
    <input type="text" placeholder='lastname' onChange={(e)=>{setEmp({...emp,lastname:e.target.value})}} /> <br /> 
    <input type="email" placeholder='email' onChange={(e)=>{setEmp({...emp,email:e.target.value})}}/> <br />
    <input type="text" placeholder='department' onChange={(e)=>{setEmp({...emp,department:e.target.value})}}/> <br /> 
    <input type="number" placeholder='salary' onChange={(e)=>{setEmp({...emp,salary:e.target.value})}} /> <br /> 
      <br />
      <button onClick={handleUpdate}>Update</button>
      <br />
      <br />
      <br />
     <Link to="/dashboard">
      <button>GotoDashBoard</button>
      </Link>
       </div>
  )
}

export default EditEmp