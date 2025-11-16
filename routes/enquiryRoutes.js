import express, { Router } from "express"
import { createEnquiry, getEnquiries } from "../controllers/enquirycontrollers.js";


const router = express.Router();

router.post("/",createEnquiry)
router.get("/",getEnquiries)

export default router;