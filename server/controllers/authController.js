import User from "../models/User.js";
import bcrypt from "bcryptjs"

export const registerUser = async (req, res) => {
    const { name, email, password, role, department } = req.body;
    try {
        if (!name || !email || !password || !role || !department) {
            return res.json({success:false,message :"Missing Details"})
        }

        const user=await User.findOne({email});
        if (user) {
            return res.json({success:false ,message:"Account already exists"})
        }

        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser=await User.create({
            name,email,password:hashedPassword,role,department
        })
        
        const token = 
    } catch (error) {
        
    }

}


export const loginUser = async () => {

}


export const logoutUser = async () => {

}

export const getMe = async () => {

}

export const changePassword = async () => {

}

