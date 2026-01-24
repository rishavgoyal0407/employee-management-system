const MyTasks = () => {
  return (
   <div className="bg-white rounded-xl shadow p-6 mb-6">
  <h2 className="text-lg font-semibold mb-4">My Tasks</h2>

  <div className="space-y-4">
    {/* Task Card */}
    <div className="border rounded-xl p-4 hover:shadow-md transition">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
        
        {/* Left Info */}
        <div className="space-y-1">
          <h3 className="font-semibold text-base">
            Prepare Monthly Report
          </h3>

          <p className="text-sm text-gray-600">
            Create and submit the monthly financial and attendance report.
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-2">
            <span>📂 Department: Finance</span>
            <span>👤 Assigned to: You</span>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
            <span>🟢 Start: 20 Jan 2026</span>
            <span>🔴 Due: 28 Jan 2026</span>
          </div>
        </div>

        {/* Right Meta */}
        <div className="flex sm:flex-col gap-2 sm:items-end">
          <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">
            Medium Priority
          </span>

          <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
            Pending
          </span>
        </div>
      </div>
    </div>

    {/* Another Task */}
    <div className="border rounded-xl p-4 hover:shadow-md transition">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-base">
            Fix UI Bugs
          </h3>

          <p className="text-sm text-gray-600">
            Resolve layout issues on mobile and tablet screens.
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-2">
            <span>📂 Department: Development</span>
            <span>👤 Assigned to: You</span>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
            <span>🟢 Start: 15 Jan 2026</span>
            <span>🔴 Due: 20 Jan 2026</span>
          </div>
        </div>

        <div className="flex sm:flex-col gap-2 sm:items-end">
          <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700 font-medium">
            High Priority
          </span>

          <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
            Completed
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default MyTasks;
