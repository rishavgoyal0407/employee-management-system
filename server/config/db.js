import mongoose from 'mongoose'

export const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL).then(() => {
            console.log("Database connected")
        }
        )
    } catch (error) {
        console.log(error.message);
    }
}
