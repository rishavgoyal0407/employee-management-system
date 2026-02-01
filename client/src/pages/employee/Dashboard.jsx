import React, { useState } from "react";
import MyTasks from "./MyTasks";

const EmployeeDashboard = () => {
  const [showTasks, setShowTasks] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
        <h1 className="text-2xl font-bold">Employee Dashboard</h1>

        <button
          onClick={() => setShowTasks(!showTasks)}
          className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          {showTasks ? "Hide My Tasks" : "View My Tasks"}
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Present Days</p>
          <p className="text-2xl font-bold text-green-600">18</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Absent Days</p>
          <p className="text-2xl font-bold text-red-500">2</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Half Days</p>
          <p className="text-2xl font-bold text-yellow-500">1</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Total Work Hours</p>
          <p className="text-2xl font-bold text-blue-600">142h</p>
        </div>
      </div>

      {/* My Tasks Section */}
      {showTasks && <MyTasks/>}

      {/* Attendance Card */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Today’s Attendance</h2>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Date</p>
            <p className="font-medium">24 Jan 2026</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
              Present
            </span>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              Check In
            </button>

            <button className="px-5 py-2 rounded-lg bg-gray-300 text-gray-700 cursor-not-allowed">
              Check Out
            </button>
          </div>
        </div>
      </div>

      {/* Attendance History */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">My Attendance</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium">Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Check In</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Check Out</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Work Hours</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">23 Jan 2026</td>
                <td className="px-4 py-2">9:05 AM</td>
                <td className="px-4 py-2">6:10 PM</td>
                <td className="px-4 py-2 text-green-600 font-medium">
                  Present
                </td>
                <td className="px-4 py-2">8.5h</td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-2">22 Jan 2026</td>
                <td className="px-4 py-2">—</td>
                <td className="px-4 py-2">—</td>
                <td className="px-4 py-2 text-red-500 font-medium">
                  Absent
                </td>
                <td className="px-4 py-2">0h</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
