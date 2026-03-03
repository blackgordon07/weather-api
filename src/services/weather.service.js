const axios = require('axios')

const API_KEY = process.env.WEATHER_API_KEY
const BASE_URL = process.env.BASE_URL

if (!API_KEY) return res.status(400).json({message: 'WEATHER_API_KEY missing'})

exports.fetchCurrentWeather = async (city)=>{
    if (!city || typeof city !== 'string' || city.trim() === '') return res.status(400).json({message:'City name required and must be a non-empty string'})

        try {
            const response = await axios.get(`${BASE_URL}/weather`,{
                params: {
                    q: city,
                    appid: API_KEY,
                    units: 'metric'
                }
            })
        
            //only return what we want (simplified)
            return{
                city: response.data.name,
                temperature: response.data.main.temp,
                description: response.data.weather[0].description,
                humidity: response.data.main.humidity,
                date: response.data.main.Date
                
            }        
        } catch (error) {
          next(error)  
        }
    
}