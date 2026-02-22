import Department from "../models/Department.js";

export const setDepartments = async (req, res) => {

    const { deptName, description } = req.body;

    try {


        if (!deptName || !description) {
            return res.json({ success: false, message: "Missing Details" })
        }

        const newDept = await Department.create({
            deptName, code: "DEPT" + Math.floor(1000 + Math.random() * 9000)

            , description
        });

        res.json({ success: true, newDept, message: "New Department added successfully" })


    } catch (error) {

        console.log(error.message)

    }




}


export const fetchDept = async (req, res) => {

    try {

        const depts = await Department.find();

        res.json(depts)


    } catch (error) {

        console.log(error.message);

    }

}
