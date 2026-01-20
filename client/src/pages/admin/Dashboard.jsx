import Card from "../../components/ui/Card";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Total Employees" value="120" />
        <Card title="Departments" value="8" />
        <Card title="Present Today" value="95" />
        <Card title="Absent" value="25" />
      </div>

      {/* Table placeholder */}
      <div className="bg-white rounded shadow p-4 overflow-x-auto">
        <h2 className="font-semibold mb-3">Recent Employees</h2>

        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Department</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">John Doe</td>
              <td className="p-2">IT</td>
              <td className="p-2 text-green-600">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
