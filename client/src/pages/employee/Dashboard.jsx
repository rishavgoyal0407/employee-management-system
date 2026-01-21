import React from "react";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 space-y-6">
      
      {/* Profile Section */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Welcome, Rishu 👋
          </h1>
          <p className="text-gray-500 mt-1">
            Department: Engineering
          </p>
        </div>

        <Badge text="Active Employee" variant="success" />
      </div>

      {/* Task Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Pending Tasks" value="5" />
        <Card title="Completed Tasks" value="12" />
        <Card title="Overdue Tasks" value="1" />
      </div>

      {/* Tasks Preview */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            My Tasks
          </h2>
          <Button text="View All Tasks" />
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <Table
            headers={["Title", "Due Date", "Status"]}
            rows={[
              ["Prepare report", "20 Jan 2026", "Pending"],
              ["Fix login bug", "18 Jan 2026", "Completed"],
              ["Team meeting", "22 Jan 2026", "Pending"],
            ]}
          />
        </div>
      </div>

      {/* Attendance Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Present Days" value="22" />
        <Card title="Absent Days" value="2" />
        <Card title="Attendance %" value="91%" />
      </div>

    </div>
  );
};

export default Dashboard;
