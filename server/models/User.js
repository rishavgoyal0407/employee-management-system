import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ["admin", "employee"],
        default: "employee"
    },
    employeeId: {
        type: String,
        unique: true,
        sparse: true
    },
    // department:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Department"
    // },
    department: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },

}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User;