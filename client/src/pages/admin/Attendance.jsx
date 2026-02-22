import { useState } from "react";

const Attendance = () => {

  const [present] = useState(29);
  const [absent] = useState(3);
  const total = present + absent;
  const attendancePercent = Math.round((present / total) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 space-y-8">

      {/* Header */}
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/40">
        <h1 className="text-3xl font-bold text-gray-800">
          Attendance Overview 📊
        </h1>
        <p className="text-gray-600 mt-2">
          Monitor employee presence and performance today
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-sm opacity-80">Present Today</h3>
          <p className="text-4xl font-bold mt-3">{present}</p>
        </div>

        <div className="bg-gradient-to-r from-red-400 to-rose-500 text-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-sm opacity-80">Absent Today</h3>
          <p className="text-4xl font-bold mt-3">{absent}</p>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-sm opacity-80">Attendance %</h3>
          <p className="text-4xl font-bold mt-3">{attendancePercent}%</p>
        </div>

      </div>

      {/* Attendance Table */}
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/40">

        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Employee Attendance
        </h2>

        {/* 🔥 Scrollable Container Added */}
        <div className="overflow-x-auto overflow-y-auto max-h-[400px] rounded-2xl scroll-smooth">
          <table className="w-full text-sm">
            
            {/* 🔥 Sticky Header Added */}
            <thead className="sticky top-0 bg-white z-10">
              <tr className="text-gray-500 border-b">
                <th className="text-left py-3">Employee</th>
                <th className="text-left py-3">Department</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y">

              {/* Sample Rows */}
              {[
                { name: "Rishu", dept: "Engineering", status: "Present" },
                { name: "Amit", dept: "HR", status: "Absent" },
                { name: "Priya", dept: "Finance", status: "Present" },
                { name: "Rahul", dept: "Engineering", status: "Present" },
                { name: "Sneha", dept: "Marketing", status: "Absent" },
                { name: "Arjun", dept: "Sales", status: "Present" },
                { name: "Neha", dept: "HR", status: "Present" },
                { name: "Vikram", dept: "Engineering", status: "Absent" },
                { name: "Ananya", dept: "Finance", status: "Present" },
                { name: "Karan", dept: "Sales", status: "Present" },
                { name: "Meera", dept: "Marketing", status: "Present" },
                { name: "Rohit", dept: "Engineering", status: "Absent" },
              ].map((emp, index) => (
                <tr key={index} className="hover:bg-gray-100/60 transition">
                  <td className="py-4 font-medium text-gray-800">{emp.name}</td>
                  <td className="py-4 text-gray-600">{emp.dept}</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        emp.status === "Present"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

export default Attendance;
