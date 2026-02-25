import User from "../models/User.js"

export const fetchEmployees = async (req, res) => {

    try {

        const employees = await User.find({ role: "employee" });

        res.json(employees);

    } catch (error) {

        console.log(error.message);
    }
}


export const totalEmployees = async (req, res) => {

    try {

        const totalNoOFEmps = await User.countDocuments({ role: "employee" });
        res.json(totalNoOFEmps);

    } catch (error) {

        console.log(error.message)

    }

}