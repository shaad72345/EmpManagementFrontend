import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <h1>
            <h1>
                Welcome to Masai Employee Management System
            </h1>
            <p>
                <Link to="/login"><span>Click here</span></Link>  to login</p>
        </h1>
    </div>
  )
}

export default Home