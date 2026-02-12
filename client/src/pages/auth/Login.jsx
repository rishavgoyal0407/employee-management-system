import { useContext } from "react";
import { useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const { login, authUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        login("login", { email, password });
        console.log(authUser);
    }

    useEffect(() => {
        if (authUser?.role === "admin") {
            navigate("/admin-dashboard");
        } else if (authUser?.role === "employee") {
            navigate("/employee-dashboard");
        }
    }, [authUser, navigate]);


    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white w-full max-w-md p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Login
                </h2>

                <input
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    required
                    className="w-full border p-2 mb-4 rounded"
                    placeholder="Email"
                />

                <input
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    required
                    type="password"
                    className="w-full border p-2 mb-4 rounded"
                    placeholder="Password"
                />

                <button onClick={onSubmitHandler} className="w-full bg-blue-600 text-white py-2 rounded">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
