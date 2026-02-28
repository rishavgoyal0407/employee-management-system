import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../axios.js";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [employees, setemployees] = useState([]);
  const [admins, setadmins] = useState([]);
  const [totalDept, settotalDept] = useState("")
  const [allDepts, setallDepts] = useState([])

  const [allTasks, setallTasks] = useState([])
  const [noOfAssignTask, setnoOfAssignTask] = useState("")
  const [tEMps, settEMps] = useState("")
  const [specEmpTask, setspecEmpTask] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;



    fetchAllDepts()
    fetchEmployees();
    fetchAlltasks();
    totalAssignTasks()
    totalEmps();
    totalDepts();

  }, [token]);


  const fetchEmployees = async () => {
    try {
      const res = await API.get(`/api/auth/employees`);
      setemployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };






  const fetchAllDepts = async (req, res) => {

    try {
      const res = await API.get(`/api/auth/fetch-depts`);

      setallDepts(res.data)

    } catch (error) {

      console.log(error.message)

    }



  }



  const totalDepts = async () => {

    try {
      const res = await API.get(`/api/auth/total-depts`);

      settotalDept(res.data)

    } catch (error) {

      console.log(error.message)

    }



  }


  const totalAssignTasks = async () => {

    try {
      const res = await API.get(`/api/auth/no-of-assign_task`);

      setnoOfAssignTask(res.data)

    } catch (error) {

      console.log(error.message)

    }


  }



  const fetchAlltasks = async (req, res) => {

    try {

      const res = await API.get(`/api/auth/fetch-tasks`);

      setallTasks(res.data);



    } catch (error) {
      console.log(error.message)

    }

  }



  const totalEmps = async () => {

    try {

      const res = await API.get(`/api/auth/no-of-emps`);

      settEMps(res.data);



    } catch (error) {
      console.log(error.message)

    }

  }



  const assignTask = async (state, credentials) => {

    const { data } = await API.post(`/api/auth/${state}`, credentials);



  }


  const addDept = async (state, credentials) => {

    try {

      const { data } = await API.post(`/api/auth/${state}`, credentials);

    } catch (error) {

      console.log(error.message)

    }

  }


  const deleteTask = async (state, credentials) => {

    try {

      const { data } = await API.put(`/api/auth/${state}`, credentials);

    } catch (error) {

      console.log(error.message)

    }

  }






  const login = async (state, credentials) => {
    try {
      const { data } = await API.post(`/api/auth/${state}`, credentials);

      if (data.success) {
        setAuthUser(data.userData);
        setToken(data.token);
        localStorage.setItem("user", JSON.stringify(data.userData));
        localStorage.setItem("token", data.token);

        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }

  };

  const addEmployee = async (state, credentials) => {

    const { data } = await API.post(`/api/auth/${state}`, credentials);


    if (data.success) {

      if (authUser?.role === "admin") {
        navigate(`/admin-dashboard/${token}`);
      } else if (authUser?.role === "employee") {
        navigate(`/employee-dashboard/${token}`);
      }

    }


  }
  const checkIn = async () => {
    try {
      const { data } = await API.post(`/api/attendance/checkIn`);
      toast.success("Checked in successfully!");
    } catch (error) {
      // Show the server's message (e.g., "Already checked in today")
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const empTask = async (state, credentials) => {

    try {


      const { data } = await API.post(`/api/auth/${state}`, credentials);
      setspecEmpTask(data.task)


    } catch (error) {

      console.log(error.message)

    }

  }




  const value = {
    login,
    authUser,
    setAuthUser,
    token,
    addEmployee,
    employees, assignTask, allTasks, addDept, allDepts, fetchAlltasks, specEmpTask, fetchAllDepts, fetchEmployees, deleteTask, empTask, noOfAssignTask, tEMps, totalDept, checkIn
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
