
import Tasks from "../models/Tasks.js";



export const assignTasks = async (req, res) => {

    const { title, description, department, employee, startDate, dueDate, priority } = req.body;

    try {

        if (!title || !description || !department || !employee || !startDate || !dueDate || !priority) {
            return res.json({ success: false, message: "Missing Details" })
        }

        const newTask = await Tasks.create({

            title,
            description,
            department,
            employee,
            startDate,
            dueDate,
            priority

        })

        res.json({ success: true, newTask, message: "assigned successfully" })

    } catch (error) {

        console.log(error.message);

    }

}


export const fetchTasks = async (req, res) => {

    const tasks = await Tasks.find()
        .populate("employee")



    res.json(tasks);

}


export const deleteTasks = async (req, res) => {



    try {
        const { _id } = req.body
        const tasks = await Tasks.findByIdAndDelete({ _id: _id })
        res.json(tasks)
    } catch (error) {

        console.log(error.message)
    }
}
