import { useNavigate } from "react-router-dom";

const Button = ({ text }) => {

 
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      {text}
    </button>
  );
};

export default Button;
