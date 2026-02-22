import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, authUser, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login("login", { email, password });
    setLoading(false);
  };

  useEffect(() => {
    if (authUser?.role === "admin") {
      navigate(`/admin-dashboard/${token}`);
    } else if (authUser?.role === "employee") {
      navigate(`/employee-dashboard/${token}`);
    }
  }, [authUser, navigate]);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-10 transition-all duration-300">

        {/* Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800">
            Sign in to your account
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Workforce Management Portal
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmitHandler} className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:bg-indigo-700 active:scale-[0.99] disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

        </form>

        {/* Footer */}
        <div className="mt-8 text-xs text-slate-400 text-center">
          Role-based secure access • Admin & Employee
        </div>

      </div>
    </div>
  );
};

export default Login;
