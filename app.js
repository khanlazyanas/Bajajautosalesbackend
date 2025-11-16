import express from "express";

import cors from "cors"

import dotenv from "dotenv"
import contactroutes from "./routes/contactroutes.js"
import enquiryroutes from "./routes/enquiryRoutes.js"
import serviceroutes from "./routes/serviceBookingroutes.js"


dotenv.config()
const app = express()



app.use(cors(
    {
        origin: process.env.FRONTEND_URL,
        credentials: true
    }
))



//Middlewares
app.use(express.json())


// Using Routes
app.use("/api/contact",contactroutes)
app.use("/api/enquiry",enquiryroutes)
app.use("/api/service",serviceroutes)



app.get("/",(req,res)=>{
    res.send("Server is Working")
})


export default app;