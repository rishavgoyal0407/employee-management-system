import express from 'express'
import { fetchEmployees } from '../controllers/employeeController.js';
import { assignTasks, fetchTasks } from '../controllers/TaskController.js';

const empRouter=express.Router();

empRouter.get("/employees",fetchEmployees);
empRouter.post("/assigned-tasks",assignTasks)
empRouter.get("/fetch-tasks",fetchTasks)

export default empRouter;