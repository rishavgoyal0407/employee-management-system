import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Table = ({ headers, allTasks }) => {


  const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

  const {deleteTask,fetchAlltasks}=useContext(AuthContext)

  const onDelete=async (id) => {

    deleteTask("delete-task",{_id:id})
    fetchAlltasks();

    
  }
  

  return (
    <div className="w-full overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
      
      <table className="min-w-full text-sm text-gray-700">
        
        {/* Table Head */}
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            {headers.map((h) => (
              <th
                key={h}
                className="px-6 py-4 text-left font-semibold tracking-wide"
              >
                {h}
              </th>
            ))}

          
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {allTasks.length > 0 ? (
            allTasks.map((task) => (
              <tr
                key={task._id}
                className="border-b last:border-none hover:bg-blue-50 transition duration-200"
              >
                <td className="px-6 py-4 font-medium">
                  {task.employee.name}
                </td>

                <td className="px-6 py-4">
                  {task.title}
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {formatDate(task.dueDate)}
                </td>
                 <td className="px-6 py-4 text-gray-500">
                  {task.priority}
                </td>

                {/* Delete Button */}
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => onDelete(task._id)}
                    className="inline-flex items-center justify-center p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers.length + 1}
                className="text-center py-8 text-gray-400 font-medium"
              >
                No tasks assigned yet 🚀
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
