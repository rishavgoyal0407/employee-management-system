import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    deptName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true
    },

    description: {
      type: String
    },

    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
    }
  },
  { timestamps: true }
);

const Department= mongoose.model("Department", departmentSchema)

export default Department;
