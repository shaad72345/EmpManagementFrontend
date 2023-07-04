import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EmployeeCard from './EmployeeCard';

function Dashboard() {
   const [emp, setEmp]   = useState([])
    useEffect(getEmployees,[])

    function getEmployees(){
    fetch("https://embackend.onrender.com/employees", {
    method : "GET",
    headers : {
      'Authorization' : `Bearer ${localStorage.getItem("EmToken")}`
    }

  }).then((res)=>res.json())
  .then((res)=>{setEmp(res.allEmployees);})
  .catch((err)=>{console.log(err)})
    }



    const navi = useNavigate();
    const  handleSignOut = ()=>{
        localStorage.removeItem("EmToken");
navi("/login");
    }

  return (
    <div><h3>DashBoard</h3>
    <Link to="/addemployee">
       <button>Add Employee</button>
       </Link>
        <button onClick={handleSignOut}>  
          Signout
        </button>
        <br />
        <br />
        <table style={{width:"90%"}}>
<tr >
    <th>id</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Salary</th>
    <th>Edit</th>
    <th>Delete</th>
</tr>

      
        {
            emp.map(function(elem){
                return <EmployeeCard props={elem}/>
            })
        }
          </table>
    </div>
  )
}

export default Dashboard