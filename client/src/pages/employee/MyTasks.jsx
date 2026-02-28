import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const MyTasks = () => {
  const { specEmpTask, authUser, empTask, allDepts } = useContext(AuthContext);

  useEffect(() => {
    if (authUser?._id) {
      empTask("emp-task", { employee: authUser._id });
    }
  }, [authUser]);

  return (
    <div className="w-full">
      {/* Empty State */}
      {specEmpTask?.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 px-4 bg-gray-50 rounded-xl border border-dashed border-gray-300">
          <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
             <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <p className="text-gray-500 font-medium">No tasks assigned yet</p>
          <p className="text-sm text-gray-400 mt-1">When tasks are assigned to you, they will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {specEmpTask.map((task) => {
            // Find Department Name safely
            const reqDept = allDepts?.find((dept) => dept._id === task.department);
            const departmentName = reqDept ? reqDept.name || reqDept.deptName : "Unknown Department";

            return (
              <div
                key={task._id}
                className="group relative bg-white border border-gray-100 rounded-xl p-5 hover:border-indigo-100 hover:shadow-md transition-all duration-300"
              >
                {/* Decorative left border accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
                  <div className="flex-1 space-y-3">
                    {/* Header: Title & Badges */}
                    <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {task.title}
                        </h3>
                        
                        <div className="flex items-center gap-2">
                           {/* Priority Badge */}
                            <span
                              className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-bold rounded-full ${
                                task.priority === "High"
                                  ? "bg-red-50 text-red-600 border border-red-100"
                                  : task.priority === "Medium"
                                  ? "bg-amber-50 text-amber-600 border border-amber-100"
                                  : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                              }`}
                            >
                              {task.priority || "Normal"}
                            </span>

                            {/* Status Badge */}
                            <span
                              className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-bold rounded-full ${
                                task.status === "Completed"
                                  ? "bg-blue-50 text-blue-600 border border-blue-100"
                                  : "bg-slate-100 text-slate-600 border border-slate-200"
                              }`}
                            >
                              {task.status || "Pending"}
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed pr-4">
                      {task.description}
                    </p>

                    {/* Meta Info (Department) */}
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-gray-50 inline-flex px-3 py-1.5 rounded-lg border border-gray-100">
                       <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                      {departmentName}
                    </div>
                  </div>

                  {/* Dates Section */}
                  <div className="flex md:flex-col gap-4 md:gap-3 md:items-end min-w-fit pt-1">
                    <div className="flex flex-col md:items-end">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Start Date</span>
                      <span className="text-sm font-medium text-gray-700">
                        {formatDate(task.startDate)}
                      </span>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Due Date</span>
                      <span className="text-sm font-bold text-gray-800">
                        {formatDate(task.dueDate)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyTasks;
