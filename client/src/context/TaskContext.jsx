import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const location =useLocation(); //Auto Load Without Refresh


  useEffect(() => {
    const storedTasks =
      JSON.parse(localStorage.getItem("assignTasks")) || [];

    setTasks(storedTasks);
  }, [location]);


  const handleDelete = (index) => {

    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("assignTasks",JSON.stringify(updatedTasks));

  }




  return (
    <TaskContext.Provider value={{ tasks, handleDelete }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
