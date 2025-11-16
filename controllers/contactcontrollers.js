
import { Contact } from "../models/Contactmodel.js";


export const createcontact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).json({
                success: false,
                message: "All field are required"
            })
        }

        const newcontact = await Contact.create({ name, email, phone, message })
        res.status(201).json({
            success: true,
            message: "Message recieved Successfully",
            data: newcontact
        })
    } catch (error) {
        console.error("error saving contact:", error)
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}

export const getcontact = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            data: contacts
        })
    } catch (error) {
        console.error("Error fetching contacts", error)
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}