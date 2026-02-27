const EmptyState = ({ text }) => {
  return (
    <div className="text-center text-gray-500 py-10">
      {text || "No data available"}
    </div>
  );
};

export default EmptyState;
