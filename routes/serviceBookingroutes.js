import express from "express"
import { CreateServiceBooking, getServiceBooking } from "../controllers/serviceBookingControllers.js"

const router = express.Router()

router.post("/book-service",CreateServiceBooking)
router.get("/book-service",getServiceBooking)

export default router;