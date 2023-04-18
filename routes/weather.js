import express from "express";
import { weatherCall } from "../controllers/weather.js";
const router = express.Router();

router.get("/hello", weatherCall)

export default router;