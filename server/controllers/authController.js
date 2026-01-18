import User from "../models/User.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.js";

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
        
        const token = generateToken(newUser._id)
        res.json({success:true , userDate:newUser,token,message:"Account created successfully"})
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }

}


export const loginUser = async (req,res) => {

  
    try {
          const {email,password}=req.body;
          const userData=await User.findOne({email});
          const isPasswordCorrect=await bcrypt.compare(password,userData.password)
        if (!isPasswordCorrect) {
            return res.json({success:false , message:"Invalid credentials"})
        }

        const token = generateToken(userData._id);
        res.json({success:true,userData,token,message:"login successfully"})
    } catch (error) {
        console.log(error.message);
        res.json({sucess:false,message:error.message})
    }

}


export const logoutUser = async () => {

}

export const getMe = async () => {

}

export const changePassword = async () => {

}

