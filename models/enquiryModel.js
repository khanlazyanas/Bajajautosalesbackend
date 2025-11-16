import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        
    },
    interestedModel: {
        type: String,
        required: true
    },
    preferredContact: {
        type: String,
        enum: ["Phone", "Email"],
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Enquiry = mongoose.model("Enquiry", enquirySchema)