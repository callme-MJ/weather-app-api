import { createError } from "../utils/error.js"
import axios from "axios"
import { formatToLocalTime } from "../utils/localTimeConverter.js"
import { formatWeatherData } from "../utils/formatWeatherData.js"
import { formatForecastData } from "../utils/formatForecastData.js"

const URL = "https://api.openweathermap.org/data/2.5/weather?"
const URL2 = "https://api.openweathermap.org/data/3.0/onecall?"

export const forecastWeather = async (params)=>{
    try {
        const apiKey = process.env.API_KEY
        const url = URL2+new URLSearchParams(params)+"&appid=" + apiKey
        const response = axios.get(url)
        return response 
        
    } catch (err) {
        return err    
    }
}



export const weatherCall = async (req, res, next) => {
    try {
        const searchParams = req.query
        const apiKey = process.env.API_KEY

        const url = URL+ new URLSearchParams(searchParams)+ "&appid=" + apiKey
        const response = await axios.get(url)

        const forecastData = await forecastWeather({lat:response.data.coord.lat,lon:response.data.coord.lon,exclude:"minutely",units:"metric"});
        const weatherData = await formatWeatherData(response.data, forecastData.data.timezone)
        const weatherForecast = await formatForecastData(forecastData.data)
        const date = formatToLocalTime(forecastData.data.current.dt, forecastData.data.timezone)
       

        res.status(200).json({ date, weatherData, weatherForecast })
    } catch (err) {
        next(err)
    }
}


