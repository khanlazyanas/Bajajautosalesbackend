import { ServiceBooking } from "../models/serviceBookingModel.js";




export const CreateServiceBooking = async(req,res)=>{
    try {
        const {name,phone,email,model,serviceType,date,pickup,notes} = req.body;

        if(!name || !phone || !model || !serviceType || !date){
            return res.status(400).json({
                success:false,
                message:"All required fields must be filled."
            })
        }


        const newBooking = await ServiceBooking.create({
            name,
            phone,
            email,
            model,
            serviceType,
            date,
            pickup,
            notes
        })

        res.status(201).json({
            success:true,
            message:"Service Booking Submitted Successfully",
            data:newBooking
        })
    } catch (error) {
        console.error("Error Saving Booking",error)
        res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}


export const getServiceBooking = async(req,res)=>{
    try {
      const bookings = await ServiceBooking.find().sort({createdAt:-1});
      res.status(200).json({
        success:true,
        data:bookings
      })
    } catch (error) {
        console.error("Error fetching bookings")
        res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}