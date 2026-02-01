import { useState } from "react";

const Attendance = () => {

  const [present, setpresent] = useState('');
  const [absent, setabsent] = useState('');
  const [attendancePercent, setattendancePercent] = useState('');
  
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-semibold mb-6">Attendance Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">Present Today: <b>29</b></div>
        <div className="bg-white p-6 rounded-xl shadow">Absent Today: <b>3</b></div>
        <div className="bg-white p-6 rounded-xl shadow">Attendance %: <b>90%</b></div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left">Employee</th>
              <th className="text-left">Department</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rishu</td>
              <td>Engineering</td>
              <td className="text-green-600">Present</td>
            </tr>
            <tr>
              <td>Amit</td>
              <td>HR</td>
              <td className="text-red-600">Absent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
