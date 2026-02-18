import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleDelete=(index) => {
    
    const updatedTasks=tasks.filter((_,i)=>i!==index);
    setTasks(updatedTasks);

  }
  

  return (
    <TaskContext.Provider value={{ tasks, addTask,handleDelete }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
