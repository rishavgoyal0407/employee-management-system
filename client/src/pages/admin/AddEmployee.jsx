import { useState } from "react";

const AddEmployee = () => {
    const [name, setname] = useState(null)
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);
    const [department, setdepartment] = useState(null);

     const employeeData={
      name,email,password,department
    }



  return (
    <div className="p-4 md:p-6  max-w-3xl">
      <h1 className="text-2xl font-semibold mb-6">Add Employee</h1>

      <div className="bg-white p-6 rounded-2xl shadow space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input value={name} onChange={(e)=>setname(e.target.value)} required type="text" className="border p-2 rounded-lg" placeholder="Full Name" />
          <input value={email} onChange={(e)=>setemail(e.target.value)} required className="border p-2 rounded-lg" placeholder="Email" />
          <input value={password} onChange={(e)=>setpassword(e.target.value)} required className="border p-2 rounded-lg" placeholder="Password" />
           <input value={department} onChange={(e)=>setdepartment(e.target.value)} required className="border p-2 rounded-lg" placeholder="department" />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Create Employee
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;
