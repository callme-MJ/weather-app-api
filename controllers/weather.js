import { createError } from "../utils/error.js"

export const weatherCall = async (req,res,next)=>{
    try {
        res.send("hello")
        
    } catch (err) {
        next(err)
    }
}


