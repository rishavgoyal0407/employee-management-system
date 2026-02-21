import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({

    title: {
        type: String
    },
    description: {
        type: String
    },
    department: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String
        // ref: "Department"
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    ,
    startDate: {
        type: Date
    },
    dueDate: {
        type: Date
    },
    priority: {
        type: String
    },

}, { timestamps: true })

const Tasks = mongoose.model("assignedTasks", taskSchema);

export default Tasks