import React, { useContext, useState } from "react";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Table from "../../components/ui/Table";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Dashboard = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const {allTasks} =useContext(AuthContext)

  const { authUser, setAuthUser,noOfAssignTask,tEMps} = useContext(AuthContext);
   

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
 
    setAuthUser(null);
    navigate("/");
  };

 
  return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 space-y-8">

    {/* Hero Header */}
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 flex flex-col md:flex-row justify-between items-center border border-white/40">

      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Welcome back, {authUser?.name || "Admin"} 👋
        </h1>
        <p className="text-gray-600 mt-2">
          Here’s what’s happening in your organization today.
        </p>
      </div>

      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <span className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium shadow-md">
          Admin
        </span>

        <button
          onClick={logout}
          className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 hover:scale-105 transition-all duration-300 shadow-md"
        >
          Logout
        </button>
      </div>
    </div>

    {/* Stats Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-all">
        <h3 className="text-sm opacity-80">Total Employees</h3>
        <p className="text-3xl font-bold mt-2">{tEMps}</p>
      </div>

      <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-all">
        <h3 className="text-sm opacity-80">Active Tasks</h3>
        <p className="text-3xl font-bold mt-2">{noOfAssignTask}</p>
      </div>

      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-all">
        <h3 className="text-sm opacity-80">Departments</h3>
        <p className="text-3xl font-bold mt-2">5</p>
      </div>

      <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-all">
        <h3 className="text-sm opacity-80">Attendance Today</h3>
        <p className="text-3xl font-bold mt-2">29</p>
      </div>

    </div>

    {/* Quick Actions */}
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/40">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <button
          onClick={() => navigate("/add-employee")}
          className="p-4 rounded-2xl bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium transition shadow-sm hover:scale-105"
        >
          ➕ Add Employee
        </button>

        <button
          onClick={() => navigate("/assign-task")}
          className="p-4 rounded-2xl bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium transition shadow-sm hover:scale-105"
        >
          📌 Assign Task
        </button>

        <button
          onClick={() => navigate("/add-departments")}
          className="p-4 rounded-2xl bg-pink-100 hover:bg-pink-200 text-pink-700 font-medium transition shadow-sm hover:scale-105"
        >
          🏢 Create Department
        </button>

        <button
          onClick={() => navigate("/admin-attendance-view")}
          className="p-4 rounded-2xl bg-green-100 hover:bg-green-200 text-green-700 font-medium transition shadow-sm hover:scale-105"
        >
          📊 View Attendance
        </button>

      </div>
    </div>

    {/* Recent Tasks */}
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/40">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Recently Assigned Tasks
        </h2>

        <button
          onClick={() => setShow(!show)}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-105 transition-all duration-300"
        >
          {show ? "Hide Tasks" : "View All Tasks"}
        </button>
      </div>

      {show && (
        <div className="overflow-x-auto rounded-xl">
          <Table
            headers={["Employee", "Task", "Due Date", "Status", "Action"]}
            allTasks={allTasks}
          
          />
        </div>
      )}
    </div>

    {/* Attendance Overview */}
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/40">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Attendance Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-green-100 p-6 rounded-2xl text-green-700 font-semibold shadow-sm">
          Present Today: 29
        </div>
        <div className="bg-red-100 p-6 rounded-2xl text-red-600 font-semibold shadow-sm">
          Absent Today: 3
        </div>
        <div className="bg-indigo-100 p-6 rounded-2xl text-indigo-700 font-semibold shadow-sm">
          Attendance: 90%
        </div>
      </div>
    </div>

  </div>
);

};

export default Dashboard;
