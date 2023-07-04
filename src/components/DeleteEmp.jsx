import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'

function DeleteEmp() {
    const {id}= useParams()
    const navigate  = useNavigate()

    const gotodashboard = ()=>{
              navigate("/dashboard");
           } 
           const backtodashboard =()=>{
            navigate("/dashboard")
           }
    const handleDelete =async()=>{
        await fetch(`https://embackend.onrender.com/employees/delete/${id}`, {
            method : "DELETE",
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem("EmToken")}`
          }
        }
            )
            // return <div> <h2> Deleted Successfully</h2> </div>

            const myTimeout = setTimeout(gotodashboard, 3000)
    }
  return (
    <div>
        <h2>Are you sure to delete thid employee??</h2><br />
        <button onClick={handleDelete}>Yes</button> 
        &nbsp;&nbsp;
        <button onClick={backtodashboard} >No</button>



    </div>
  )
}

export default DeleteEmp