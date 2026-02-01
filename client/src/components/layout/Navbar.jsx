const Navbar = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
      <button
        className="md:hidden text-xl"
        onClick={onMenuClick}
      >
        ☰
      </button>

      <h1 className="font-semibold text-lg">
        Employee Management System
      </h1>

      <div className="text-sm text-gray-600">
        Admin
      </div>
    </header>
  );
};

export default Navbar;
