import React, { useState } from "react";

const AssignTask = () => {
  const [title, settitle] = useState(null);
  const [description, setdescription] = useState(null);
  const [employee, setemployee] = useState(null);
  const [department, setdepartment] = useState(null);
  const [startDate, setstartDate] = useState(null);
  const [dueDate, setdueDate] = useState(null);
  const [priority, setpriority] = useState(null);



  const clearAll=(e) => {
    e.preventDefault();
    settitle('');
    setdescription('');
    setdepartment('');
    setdueDate('');
    setstartDate('');
    setpriority('');
    setemployee('')
  }

  const tasksData={
   title,
   description,
   department,
   dueDate,
   startDate,
   priority,
   employee

  }

    const submitHandler= (e) => {
    e.preventDefault();

    


  }
  
  
  

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Assign Task
        </h1>
        <p className="text-gray-500">
          Create and assign tasks to employees
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-3xl bg-white rounded-xl shadow p-6">
        <form onSubmit={submitHandler} className="space-y-5">

          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Task Title
            </label>
            <input
              onChange={(e) => settitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter task title"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Task Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Task Description
            </label>
            <textarea
              onChange={(e) => setdescription(e.target.value)}
              value={description}
              rows="4"
              placeholder="Describe the task clearly"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Assign To */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Department */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Department
              </label>
              <input
                onChange={(e) =>setdepartment(e.target.value)}
                value={department}
                type="text"
                placeholder="Enter Department"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Employee */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Assign To Employee
              </label>
              <select value={employee} onChange={(e)=>setemployee(e.target.value)} className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Employee</option>
                <option>Ravi Kumar</option>
                <option>Anjali Sharma</option>
              </select>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Start Date
              </label>
              <input
              value={startDate}
                onChange={(e)=>setstartDate(e.target.value)}
                type="date"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Due Date
              </label>
              <input
              value={dueDate}
              onChange={(e)=>setdueDate(e.target.value)}
                type="date"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Priority
            </label>
            <select value={priority} onChange={(e)=>setpriority(e.target.value)} className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Action Button */}
          <div className="flex justify-end gap-3 pt-4">
            <button
            onClick={clearAll}
              type="reset"
              className="px-5 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Assign Task
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AssignTask;
