const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
        />
      )}

      <aside
        className={`fixed md:static z-30 h-full w-64 bg-white shadow
        transform transition-transform duration-200
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="p-4 font-bold text-xl border-b">
          EMS Admin
        </div>

        <nav className="p-4 space-y-3">
          <a className="block p-2 rounded hover:bg-gray-100">Dashboard</a>
          <a className="block p-2 rounded hover:bg-gray-100">Employees</a>
          <a className="block p-2 rounded hover:bg-gray-100">Departments</a>
          <a className="block p-2 rounded hover:bg-gray-100">Attendance</a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
