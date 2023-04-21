import { formatToLocalTime } from "./localTimeConverter.js"

export const  formatWeatherData = async (data,timezone) => {
    const sunsetTime = formatToLocalTime(data.sys.sunset, timezone, "hh:mm a")
    const sunriseTime = formatToLocalTime(data.sys.sunrise, timezone, "hh:mm a")

    //convert the full date to HH:MM format and the  time to 12 hour format
    const {
        coord,
        main,
        wind,
        name,
        weather,
        dt,
        sys:{country},
    } = data

    return(
{
        coord,
        main,
        wind,
        name,
        weather,
        dt,
        country,
        sunsetTime,
        sunriseTime,}
        ) 
}