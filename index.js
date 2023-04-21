import  express  from "express";
const app = express();
import weatherRoute from "./routes/weather.js"
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();





app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use(cors())
app.use(express.json())

app.use("/api/weather", weatherRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});