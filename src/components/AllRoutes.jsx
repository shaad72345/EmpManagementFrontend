import React from 'react'
import { Route, Routes  } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import Addemployee from './Addemployee'
import DeleteEmp from './DeleteEmp'
import EditEmployee from './EditEmployee'
function AllRoutes() {
  return (
    <div>
       <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path='/addemployee' element={<PrivateRoute><Addemployee/></PrivateRoute>}/>
        <Route path='/delete/:id' element={<PrivateRoute><DeleteEmp/></PrivateRoute>}/>
        <Route path='/edit/:id' element={<PrivateRoute><EditEmployee/></PrivateRoute>}/>

       </Routes>
    </div>
  )
}

export default AllRoutes