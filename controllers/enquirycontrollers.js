import { Enquiry } from "../models/enquiryModel.js";

export const createEnquiry = async(req,res)=>{
    try {
        const {fullName,phoneNumber,email,interestedModel,preferredContact,message} = req.body;
        if(!fullName || !phoneNumber  || !interestedModel || !preferredContact || !message){
            return res.status(400).json({
                success:false,
                message:"All required fields must be filled."
            })
        }

        const newEnquiry = await Enquiry.create({
            fullName,
            phoneNumber,
            email,
            interestedModel,
            preferredContact,
            message
        });
        res.status(201).json({
            success:true,
            message:"Your Enquiry is Recived Successfully",
            data:newEnquiry
        });
    } catch (error) {
        console.error("Error Saving Enquiry:",error);
        res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}

export const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: enquiries,
    });
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};