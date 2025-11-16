import app  from "./app.js";
import dotenv from "dotenv"
import { connectdatabase } from "./Config/database.js";

dotenv.config()

// Connect to Mongodb
connectdatabase()

app.listen(process.env.PORT,(req,res)=>{
    console.log("Server is working on port 5000")
})