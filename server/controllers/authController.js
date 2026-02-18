import User from "../models/User.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
    const { name, email, password, role, department } = req.body;
    try {
        if (!name || !email || !password || !role || !department) {
            return res.json({ success: false, message: "Missing Details" })
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.json({ success: false, message: "Account already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name, email, password: hashedPassword, role, department, employeeId: "EMP" + Date.now()
        })

        const token = generateToken(newUser._id)
        res.json({ success: true, userData: newUser, token, message: "Account created successfully" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }

}


export const loginUser = async (req, res) => {


    try {


        const { email, password } = req.body;
        const userData = await User.findOne({ email });
        if (!userData) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }
        const isPasswordCorrect = await bcrypt.compare(password, userData.password)
        if (!isPasswordCorrect) {
            return res.json({ success: false, message: "Invalid credentials" })
        }

        const token = generateToken(userData._id);

        res.json({
            success: true, userData: {
                _id: userData._id,
                name: userData.name,
                email: userData.email,
                role: userData.role, 
            }, token, message: "login successfully"
        })
    } catch (error) {
        console.log(error.message);
        res.json({ sucess: false, message: error.message })
    }

}



// export const getMe = async (req, res) => {
//     //req.user comes from authMiddleware.




// }
// export const changePassword = async (req, res) => {
//   try {
//     const { oldPassword, newPassword } = req.body;

//     const user = await User.findById(req.user._id).select("+password");

//     const isMatch = await bcrypt.compare(oldPassword, user.password);

//     if (!isMatch) {
//       return res.status(401).json({ message: "Old password incorrect" });
//     }

//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(newPassword, salt);

//     await user.save();

//     res.json({ message: "Password changed successfully" });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
