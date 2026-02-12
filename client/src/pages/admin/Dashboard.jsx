import React from "react";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {

  const navigate = useNavigate();
  const [show, setshow] = useState(false);

  return (
    <div className="p-4 md:p-6 space-y-6">

      {/* Header */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Manage employees, tasks & attendance
          </p>
        </div>

        <Badge text="Administrator" variant="info" />
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
          {/* <Button text="Add Employee" />
          <Button text="Assign Task" />
          <Button text="Create Department" />
          <Button text="View Attendance" /> */}
          <button onClick={() => navigate('/add-employee')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Employee</button>
          <button onClick={() => navigate('/assign-task')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Assign Task</button>
          <button onClick={() => navigate('/add-departments')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Create Department</button>
          <button onClick={() => navigate('/admin-attendance-view')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View Attendance</button>
        </div>
      </div>

      {/* Recent Tasks */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Recently Assigned Tasks
          </h2>
          <button onClick={() =>setshow(!show)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View All Tasks</button>
        </div>


        {
          show && <div className="overflow-x-auto">
            <Table
              headers={["Employee", "Task", "Due Date", "Status"]}
              rows={[
                ["Amit", "Prepare payroll", "20 Jan 2026", "Pending"],
                ["Riya", "Fix UI bugs", "18 Jan 2026", "Completed"],
                ["John", "API integration", "22 Jan 2026", "Pending"],
              ]}
            />
          </div>
        }

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
