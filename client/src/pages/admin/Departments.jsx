const Departments = () => {
  return (
    <div className="p-4 md:p-6 max-w-4xl">
      <h1 className="text-2xl font-semibold mb-6">Departments</h1>

      <div className="bg-white p-6 rounded-2xl shadow mb-8 max-w-xl">
        <h2 className="font-semibold mb-4">Add Department</h2>
        <input className="border p-2 rounded-lg w-full mb-4" placeholder="Department Name" />
        <textarea className="border p-2 rounded-lg w-full mb-4" placeholder="Description"></textarea>
        <button className="w-full bg-green-600 text-white py-2 rounded-lg">
          Add Department
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-semibold mb-4">Existing Departments</h2>
        <ul className="space-y-3">
          <li className="flex justify-between border-b pb-2">
            <span>Engineering</span>
            <span className="text-gray-500">12 employees</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>HR</span>
            <span className="text-gray-500">5 employees</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Departments;
