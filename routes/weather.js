import express from "express";
import { weatherCall } from "../controllers/weather.js";
const router = express.Router();

router.get("/", weatherCall)

export default router;