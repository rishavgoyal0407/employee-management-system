import express from 'express'
import { fetchEmployees, totalEmployees } from '../controllers/employeeController.js';
import { assignTasks, deleteTasks, fetchTasks, totalAssignTasks } from '../controllers/TaskController.js';
import { fetchDept, setDepartments, totalDepts } from '../controllers/deptController.js';

const empRouter=express.Router();

empRouter.get("/employees",fetchEmployees);
empRouter.post("/assigned-tasks",assignTasks)
empRouter.get("/fetch-tasks",fetchTasks)
empRouter.post("/add-departments",setDepartments)
empRouter.get("/fetch-depts",fetchDept)
empRouter.put("/delete-task",deleteTasks)
empRouter.get("/no-of-assign_task",totalAssignTasks)
empRouter.get("/no-of-emps",totalEmployees)
empRouter.get("/total-depts",totalDepts)

export default empRouter;