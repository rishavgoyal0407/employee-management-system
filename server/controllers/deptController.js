import Department from "../models/Department.js";

export const setDepartments = async (req, res) => {

    const { deptName, description } = req.body;

    try {

        const newDept = await Department.create({ deptName,code: "DEPT" + Date.now(), description });

        res.json({ success: true, newDept, message: "New Department added successfully" })


    } catch (error) {

        console.log(error.message)

    }





}
