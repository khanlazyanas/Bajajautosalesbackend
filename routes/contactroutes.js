import express, { Router } from "express"
import { createcontact, getcontact } from "../controllers/contactcontrollers.js";

const router = express.Router()

router.post("/",createcontact)
router.get("/",getcontact)

export default router;