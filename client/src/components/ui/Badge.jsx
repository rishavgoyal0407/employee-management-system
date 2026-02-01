const Badge = ({ text, type = "default" }) => {
  const styles = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span className={`px-2 py-1 text-sm rounded ${styles[type]}`}>
      {text}
    </span>
  );
};

export default Badge;
