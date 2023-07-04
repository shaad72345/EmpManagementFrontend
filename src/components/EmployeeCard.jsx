import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
function EmployeeCard({props}) {


  return (
    <tr>
   <td>{props._id}</td>
   <td>{props.firstname}</td>
   <td>{props.lastname}</td>
   <td>{props.email}</td>
   <td>{props.salary}</td>
   <td>
   <Link to ={`/edit/${props._id}`}><button style={{color:"black"}} >Edit</button> </Link></td>
   
   <td>
   <Link to ={`/delete/${props._id}`}><button style={{color:"black"}} >Delete</button> </Link></td>
   
    </tr>
  )
}

export default EmployeeCard