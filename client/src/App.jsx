import React from 'react'
import  { Route ,Routes} from 'react-router-dom'
import Login from './pages/auth/Login'
import Dashboard from './pages/admin/Dashboard'
import AddEmployee from './pages/admin/AddEmployee'
import AssignTask from './pages/admin/AssignTask'
import Attendance from './pages/admin/Attendance'
import AttendanceEmp from './pages/employee/AttendanceEmp'
import Departments from './pages/admin/Departments'
import MyTasks from './pages/employee/MyTasks'
import EmployeeDashboard from './pages/employee/Dashboard'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/add-employee' element={<AddEmployee/>} />
        <Route path='/admin-dashboard' element={<Dashboard/>}/>
        <Route path='/assign-task' element={<AssignTask/>}/>
        <Route path='/admin-attendance-view' element={<Attendance/>}/>
        <Route path='/my-attendance' element={<AttendanceEmp/>}/>
        <Route path='/add-departments' element={<Departments/>}/>
        <Route path='/my-tasks' element={<MyTasks/>}/>
        <Route path='/employee-dashboard' element={<EmployeeDashboard/>}/>

      </Routes>
    </div>
  )
}

export default App
