import Attendance from "../models/Attendance.js";

export const checkIn = async (req, res) => {
  try {
    const userId = req.user.id; 
    const today = new Date().toISOString().split("T")[0];

   
    const existing = await Attendance.findOne({
      user: userId,
      date: today,
    });

    if (existing) {
      return res.status(400).json({
        message: "Already checked in today",
      });
    }

    const attendance = await Attendance.create({
      user: userId,
      date: today,
      checkIn: new Date(), 
    });

    res.status(201).json(attendance);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
