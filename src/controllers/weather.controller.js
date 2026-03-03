const weatherService = require('../services/weather.service')

exports.getCurrentWeather = async (req,res,next)=>{
    try {
        const city = req.query.city

        if(!city) return res.status(400).json({
            success,
            message: 'City is required'
        })

        const weatherData = await weatherService.fetchCurrentWeather(city)

        res.status(200).json({
            success: true,
            data: weatherData
        })
    } catch (error) {
        next(error)
    }
}