import express from 'express'
import { checkIn } from "../controllers/attendanceController.js";

import { protectRoute } from '../middlewares/authMiddleware.js'

const attendanceRouter=express.Router()

attendanceRouter.post("/checkIn",protectRoute,checkIn)

export default attendanceRouter