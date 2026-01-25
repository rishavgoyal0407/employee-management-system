import mongoose from "mongoose";

const attendanceSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    checkIn:{
        type:Date
    },
    checkOut:{
        type:Date
    },
    status:{
        type:String,
        enum:["present","absent","half-day"],
        default:"present"
    },
    workHours:{
        type:Number,
        default:0
    }
},{timestamps:true});

const Attendance=mongoose.model("Attendance",attendanceSchema);

export default Attendance;