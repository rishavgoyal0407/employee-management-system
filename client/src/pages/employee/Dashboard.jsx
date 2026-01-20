import EmployeeLayout from "../../components/layout/EmployeeLayout";
import Button from "../../components/ui/Button";

const EmployeeDashboard = () => {
  return (
    <EmployeeLayout>
      <h1 className="text-2xl font-bold mb-4">Employee Dashboard</h1>
      <Button text="Check In" />
    </EmployeeLayout>
  );
};

export default EmployeeDashboard;
