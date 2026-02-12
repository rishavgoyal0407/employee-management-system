import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Dashboard from './pages/admin/Dashboard'
import AddEmployee from './pages/admin/AddEmployee'
import AssignTask from './pages/admin/AssignTask'
import Attendance from './pages/admin/Attendance'
import AttendanceEmp from './pages/employee/AttendanceEmp'
import Departments from './pages/admin/Departments'
import MyTasks from './pages/employee/MyTasks'
import EmployeeDashboard from './pages/employee/Dashboard'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext.jsx'
const App = () => {
  const { authUser } = useContext(AuthContext);
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/add-employee' element={<AddEmployee />} />
        <Route path='/admin-dashboard' element={authUser?.role === "admin" ? <Dashboard /> : <Login/>} />
        <Route path='/assign-task' element={<AssignTask />} />
        <Route path='/admin-attendance-view' element={<Attendance />} />
        <Route path='/my-attendance' element={<AttendanceEmp />} />
        <Route path='/add-departments' element={<Departments />} />
        <Route path='/my-tasks' element={<MyTasks />} />
        <Route path='/employee-dashboard' element={authUser?.role === "employee" ? <EmployeeDashboard/> : <Login/>} />
      </Routes>
    </div>
  )
}


export default App
