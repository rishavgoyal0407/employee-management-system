import express from 'express'
import "dotenv/config"
import cors from 'cors'
import userRouter from './routes/authRoutes.js';
import { connectdb } from './config/db.js';
import http from "http"
import empRouter from './routes/employeeRoutes.js';
import attendanceRouter from './routes/attendanceRoutes.js';
// import { seedAdmin } from './config/seedAdmin.js';
const app = express();
const server = http.createServer(app)
app.use(express.json({ limit: "4mb" }));
app.use(cors());


app.get("/api/status", (req, res) => {
    res.send("server is working");
});

await connectdb();


app.use("/api/auth", userRouter);
app.use("/api/auth",empRouter);
app.use("/api/attendance",attendanceRouter);



const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log("server is running on port :" + PORT);
});
