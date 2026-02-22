import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("employee");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { addEmployee } = useContext(AuthContext);

  const createEmp = async () => {
    if (!name || !email || !password || !department) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const employeeData = {
        name,
        email,
        password,
        role,
        department,
      };

      await addEmployee("registerUser", employeeData);

      // Reset form
      setName("");
      setEmail("");
      setPassword("");
      setDepartment("");
      setRole("employee");

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 flex justify-center items-start">

      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-8 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Add New Employee 🚀
          </h1>
          <p className="text-gray-600 mt-2">
            Create and assign employees seamlessly into your organization
          </p>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition p-3 rounded-xl outline-none"
            placeholder="Full Name"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition p-3 rounded-xl outline-none"
            placeholder="Email Address"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition p-3 rounded-xl outline-none"
            placeholder="Password (min 6 characters)"
          />

          <input
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            type="text"
            className="border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition p-3 rounded-xl outline-none"
            placeholder="Department"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition p-3 rounded-xl outline-none md:col-span-2"
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>

        </div>

        {/* Button */}
        <button
          onClick={createEmp}
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 font-semibold disabled:opacity-70"
        >
          {loading ? "Creating Employee..." : "Create Employee"}
        </button>

      </div>
    </div>
  );
};

export default AddEmployee;
