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

  const [allDepts, setallDepts] = useState([])

  const [allTasks, setallTasks] = useState([])
  const [noOfAssignTask, setnoOfAssignTask] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    

    fetchAllDepts()
    fetchEmployees();
    fetchAlltasks();
    totalAssignTasks()

  }, []);


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



    const totalAssignTasks=async () => {

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


  const deleteTask=async (state,credentials) => {

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

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.userData));
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

      console.log(data.userData?.name)

    }


  }



  const value = {
    login,
    authUser,
    setAuthUser,
    token,
    addEmployee,
    employees, assignTask, allTasks, addDept,allDepts,fetchAlltasks,fetchAllDepts,fetchEmployees,deleteTask,noOfAssignTask
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
