import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Departments = () => {
  const [deptName, setdeptName] = useState("");
  const [description, setdescription] = useState("");
  const { addDept } = useContext(AuthContext);

  const deptData = { deptName, description };

  const submitHandler = () => {
    if (!deptName.trim()) return;

    addDept("add-departments", deptData);
    setdeptName("");
    setdescription("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex justify-center">
      <div className="w-full max-w-5xl">

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8 text-gray-800 tracking-wide">
          Departments
        </h1>

        {/* Add Department Card */}
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl mb-10 border border-gray-200">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">
            Add New Department
          </h2>

          <input
            value={deptName}
            onChange={(e) => setdeptName(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            placeholder="Department Name"
          />

          <textarea
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            rows={4}
            className="w-full mb-6 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition resize-none"
            placeholder="Description"
          />

          <button
            onClick={submitHandler}
            className="w-full py-3 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
          >
            Add Department
          </button>
        </div>

        {/* Existing Departments */}
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-200">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">
            Existing Departments
          </h2>

          {/* Scrollable Container */}
          <div className="max-h-64 overflow-y-auto pr-2 custom-scroll">
            <ul className="space-y-4">
              <li className="flex justify-between items-center p-4 rounded-xl bg-gray-50 hover:bg-indigo-50 transition shadow-sm">
                <span className="font-medium text-gray-700">
                  Engineering
                </span>
                <span className="text-sm text-gray-500">
                  12 employees
                </span>
              </li>

              <li className="flex justify-between items-center p-4 rounded-xl bg-gray-50 hover:bg-indigo-50 transition shadow-sm">
                <span className="font-medium text-gray-700">
                  Human Resources
                </span>
                <span className="text-sm text-gray-500">
                  5 employees
                </span>
              </li>

              {/* Add dynamic departments here */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
