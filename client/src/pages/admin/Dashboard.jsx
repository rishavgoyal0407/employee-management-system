import React, { useContext, useState } from "react";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Table from "../../components/ui/Table";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { TaskContext } from "../../context/TaskContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { tasks,handleDelete } = useContext(TaskContext);

  const { authUser, setAuthUser,employees } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthUser(null);
    navigate("/");
  };

  return (
    <div className="p-4 md:p-6 space-y-6">

      {/* Header */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Welcome {authUser?.name || "Administrator"} 👋
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Badge text="Administrator" variant="info" />
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Total Employees" value="32" />
        <Card title="Active Tasks" value="18" />
        <Card title="Departments" value="5" />
        <Card title="Attendance Today" value="29" />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => navigate("/add-employee")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add Employee
          </button>

          <button
            onClick={() => navigate("/assign-task")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Assign Task
          </button>

          <button
            onClick={() => navigate("/add-departments")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Create Department
          </button>

          <button
            onClick={() => navigate("/admin-attendance-view")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Attendance
          </button>
        </div>
      </div>

      {/* Recent Tasks */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Recently Assigned Tasks
          </h2>

          <button
            onClick={() => setShow(!show)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {show ? "Hide Tasks" : "View All Tasks"}
          </button>
        </div>

        {show && (
          <div className="overflow-x-auto">
            <Table
              headers={["Employee", "Task", "Due Date", "Status","Action"]}
              tasks={tasks}
              onDelete={handleDelete}
            />
          </div>
        )}
      </div>

      {/* Attendance Overview */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Attendance Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Present Today" value="29" />
          <Card title="Absent Today" value="3" />
          <Card title="Attendance %" value="90%" />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
