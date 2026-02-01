import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Protected = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p className="text-center mt-10">Unauthorized</p>;
  }

  return children;
};

export default Protected;
