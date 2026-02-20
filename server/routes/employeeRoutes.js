import express from 'express'
import { fetchEmployees } from '../controllers/employeeController.js';

const empRouter=express.Router();

empRouter.get("/employees",fetchEmployees);

export default empRouter;