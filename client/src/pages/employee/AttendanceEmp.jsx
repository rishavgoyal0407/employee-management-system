const AttendanceEmp = () => {
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-semibold mb-6">My Attendance</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">Present: <b>22</b></div>
        <div className="bg-white p-6 rounded-xl shadow">Absent: <b>2</b></div>
        <div className="bg-white p-6 rounded-xl shadow">Attendance %: <b>91%</b></div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18 Jan 2026</td>
              <td className="text-green-600">Present</td>
            </tr>
            <tr>
              <td>17 Jan 2026</td>
              <td className="text-red-600">Absent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceEmp;
