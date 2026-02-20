import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { AuthContext } from "../../context/AuthContext";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("employee");

  const { addEmployee, employees } = useContext(AuthContext);
  const employeeNames = employees?.map(emp => emp.name);


  const employeeData = {

    name,
    email,
    password,
    role,
    department,

  };

  const createEmp = async () => {

    addEmployee("registerUser", employeeData);

   

    setName('');
    setEmail('');
    setPassword('');
    setDepartment('');
    setRole('');


  }



  return (
    <div className="p-4 md:p-6 max-w-3xl">
      <h1 className="text-2xl font-semibold mb-6">Add Employee</h1>

      <div className="bg-white p-6 rounded-2xl shadow space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            className="border p-2 rounded-lg"
            placeholder="Full Name"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            className="border p-2 rounded-lg"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            className="border p-2 rounded-lg"
            placeholder="Password"
          />

          <input
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
            className="border p-2 rounded-lg"
            placeholder="Department"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border p-2 rounded-lg"
          >

            
            <option value="employee">employee</option>
            <option value="admin">admin</option>
          </select>

        </div>

        <button
          onClick={createEmp}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create Employee
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;
