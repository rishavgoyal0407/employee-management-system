import Navbar from "./Navbar";

const EmployeeLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="p-4 md:p-6">
        {children}
      </main>
    </div>
  );
};

export default EmployeeLayout;
