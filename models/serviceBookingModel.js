import mongoose, { model } from "mongoose";


const servicebookingScema = new mongoose.Schema({
    name:{
       type:String,
       required:true
    },
    phone:{
       type:String,
       required:true
    },
    email:{
        type:String,
    },
    model:{
        type:String,
        required:true
    },
    serviceType:{
        type:String,
        required:true,

    },
    date:{
        type:String,
        required:true
    },
    pickup:{
        type:String,
        default:"No"
    },
    notes:{
        type:String
    }

},{timestamps:true}
)

export const ServiceBooking = mongoose.model("ServiceBooking",servicebookingScema)