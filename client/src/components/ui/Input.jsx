const Input = ({ placeholder, type = "text" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 border rounded"
    />
  );
};

export default Input;
