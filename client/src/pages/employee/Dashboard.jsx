import React, { useContext, useEffect, useState } from "react";
import MyTasks from "./MyTasks";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const EmployeeDashboard = () => {
  const [showTasks, setShowTasks] = useState(false);
  const { setAuthUser, authUser, checkIn, empTask } = useContext(AuthContext);
  const [checkedIn, setcheckedIn] = useState(false)
  const [checkedOut, setCheckedOut] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthUser(null);
    navigate("/");
  };

  const dashboardData = {

  }

  useEffect(() => {

    empTask("emp-task", { employee: authUser._id })

  }, [])



  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* Custom Scrollbar */}
      <style>
        {`
          .custom-scroll::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scroll::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: #6366f1;
            border-radius: 10px;
          }
          .custom-scroll::-webkit-scrollbar-thumb:hover {
            background: #4f46e5;
          }
        `}
      </style>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Hi, <span className="text-indigo-600">{authUser?.name}</span> 👋
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => { setShowTasks(!showTasks) }}
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200 shadow-sm hover:shadow-md"
          >
            {showTasks ? "Hide My Tasks" : "View My Tasks"}
          </button>

          <button
            onClick={logout}
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition duration-200 shadow-sm hover:shadow-md"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Present Days",
            value: dashboardData?.presentDays || 0,
            color: "text-green-600",
          },
          {
            title: "Absent Days",
            value: dashboardData?.absentDays || 0,
            color: "text-red-500",
          },
          {
            title: "Half Days",
            value: dashboardData?.halfDays || 0,
            color: "text-yellow-500",
          },
          {
            title: "Total Work Hours",
            value: dashboardData?.totalWorkHours || 0,
            color: "text-blue-600",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition duration-200"
          >
            <p className="text-sm text-gray-500">{card.title}</p>
            <p className={`text-2xl font-bold mt-2 ${card.color}`}>
              {card.value}
            </p>
          </div>
        ))}
      </div>


      {/* My Tasks Section */}
      {showTasks && (
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 max-h-[350px] overflow-y-auto custom-scroll">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            My Tasks
          </h2>
          <MyTasks />
        </div>
      )}

      {/* Today's Attendance */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8 hover:shadow-md transition duration-200">
        <h2 className="text-lg font-semibold mb-6 text-gray-700">
          Today’s Attendance
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-sm text-gray-500">Date</p>
            <p className="font-medium">24 Jan 2026</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
              Present
            </span>
          </div>

          <div className="flex gap-3">
            {/* Check In Button */}
            <button
              onClick={() => {
                checkIn();
                setcheckedIn(true);
              }}
              disabled={checkedIn}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 transform shadow-sm
      ${checkedIn
                  ? "bg-green-600 text-white cursor-not-allowed scale-95"
                  : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md active:scale-95"
                }`}
            >
              {checkedIn ? "✓ Checked In" : "Check In"}
            </button>

            {/* Check Out Button */}
            <button
              onClick={() => {
                setCheckedOut(true);
              }}
              disabled={!checkedIn || checkedOut}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 transform shadow-sm
      ${checkedOut
                  ? "bg-purple-600 text-white cursor-not-allowed scale-95"
                  : checkedIn
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md active:scale-95"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              {checkedOut ? "✓ Checked Out" : "Check Out"}
            </button>
          </div>


        </div>
      </div>

      {/* Attendance History */}
      <div className="bg-white rounded-xl shadow-sm p-6 max-h-[400px] overflow-y-auto custom-scroll hover:shadow-md transition duration-200">
        <h2 className="text-lg font-semibold mb-6 text-gray-700">
          My Attendance History
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  Date
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  Check In
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  Check Out
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  Status
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  Work Hours
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="px-4 py-3">23 Jan 2026</td>
                <td className="px-4 py-3">9:05 AM</td>
                <td className="px-4 py-3">6:10 PM</td>
                <td className="px-4 py-3 text-green-600 font-medium">
                  Present
                </td>
                <td className="px-4 py-3">8.5h</td>
              </tr>

              <tr className="border-t hover:bg-gray-50 transition">
                <td className="px-4 py-3">22 Jan 2026</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3 text-red-500 font-medium">
                  Absent
                </td>
                <td className="px-4 py-3">0h</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default EmployeeDashboard;
