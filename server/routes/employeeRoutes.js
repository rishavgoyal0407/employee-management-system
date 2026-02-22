import express from 'express'
import { fetchEmployees } from '../controllers/employeeController.js';
import { assignTasks, fetchTasks } from '../controllers/TaskController.js';
import { fetchDept, setDepartments } from '../controllers/deptController.js';

const empRouter=express.Router();

empRouter.get("/employees",fetchEmployees);
empRouter.post("/assigned-tasks",assignTasks)
empRouter.get("/fetch-tasks",fetchTasks)
empRouter.post("/add-departments",setDepartments)
empRouter.get("/fetch-depts",fetchDept)

export default empRouter;