
export const forecastWeather = async (params)=>{
    try {
        const apiKey = process.env.API_KEY
        const url = process.env.URL2+new URLSearchParams(params)+"&appid=" + apiKey
        console.log(url);
        const response = axios.get(url)
        console.log(response);
        return response 
        
    } catch (err) {
        return err    
    }
}