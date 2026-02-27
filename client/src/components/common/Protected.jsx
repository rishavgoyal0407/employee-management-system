import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Protected = ({ children }) => {
  const { authUser } = useContext(AuthContext);

  if (!authUser) {
    return <p className="text-center mt-10">Unauthorized</p>;
  }

  return children;
};

export default Protected;
