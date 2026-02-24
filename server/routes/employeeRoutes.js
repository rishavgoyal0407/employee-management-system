import express from 'express'
import { fetchEmployees } from '../controllers/employeeController.js';
import { assignTasks, deleteTasks, fetchTasks } from '../controllers/TaskController.js';
import { fetchDept, setDepartments } from '../controllers/deptController.js';

const empRouter=express.Router();

empRouter.get("/employees",fetchEmployees);
empRouter.post("/assigned-tasks",assignTasks)
empRouter.get("/fetch-tasks",fetchTasks)
empRouter.post("/add-departments",setDepartments)
empRouter.get("/fetch-depts",fetchDept)
empRouter.put("/delete-task",deleteTasks)

export default empRouter;