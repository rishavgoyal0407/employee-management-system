import React, { useState } from "react";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

const AssignTask = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [employee, setemployee] = useState("");
  const [department, setdepartment] = useState("");
  const [startDate, setstartDate] = useState("");
  const [dueDate, setdueDate] = useState("");
  const [priority, setpriority] = useState("");

  const { employees, assignTask,allDepts,fetchAlltasks } = useContext(AuthContext);




  const clearAll = (e) => {
    e.preventDefault();
    settitle('');
    setdescription('');
    setdepartment('');
    setdueDate('');
    setstartDate('');
    setpriority('');
    setemployee('')
  }






  const tasksData = {
    title,
    description,
    department,
    employee,
    startDate,
    dueDate,
    priority


  }





  const submitHandler = (e) => {
    e.preventDefault();
    assignTask("assigned-tasks", tasksData);
    fetchAlltasks();
    



    settitle('');
    setdescription('');
    setdepartment('');
    setdueDate('');
    setstartDate('');
    setpriority('');
    setemployee('')




  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
            Assign Task
          </h1>
          <p className="text-gray-500">
            Create and assign tasks to employees
          </p>
        </div>

        {/* Glass Card */}
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-200">

          <form onSubmit={submitHandler} className="space-y-6">

            {/* Task Title */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Task Title
              </label>
              <input
                value={title}
                onChange={(e) => settitle(e.target.value)}
                type="text"
                placeholder="Enter task title"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Task Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                rows="4"
                placeholder="Describe the task clearly"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition resize-none"
              />
            </div>

            {/* Department + Employee */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Department
                </label>
                <select
                  value={department}
                  onChange={(e) => setdepartment(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                >
                  <option value="">Select Department</option>
                  {allDepts?.map((dept) => (
                    <option key={dept._id} value={dept._id}>
                      {dept.deptName} ({dept.code})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Assign To Employee
                </label>
                <select
                  value={employee}
                  onChange={(e) => setemployee(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                >
                  <option value="">Select Employee</option>
                  {employees?.map((emp) => (
                    <option key={emp._id} value={emp._id}>
                      {emp.name} ({emp.employeeId})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Start Date
                </label>
                <input
                  value={startDate}
                  onChange={(e) => setstartDate(e.target.value)}
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Due Date
                </label>
                <input
                  value={dueDate}
                  onChange={(e) => setdueDate(e.target.value)}
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                />
              </div>
            </div>

            {/* Priority */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setpriority(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
              >
                <option value="">Select Priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <button
                onClick={clearAll}
                type="reset"
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
              >
                Clear
              </button>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
              >
                Assign Task
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AssignTask;
