import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config()

export const connectdatabase = async(req,res)=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            dbName:"NationalBajaj"
        });
        console.log(`Mongodb Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error("Mongodb connection error:",error.message);
        process.exit(1)
    }
}