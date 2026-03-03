const express =require('express')
const router = express.Router()

const weatherController= require('../controllers/weather.controller')

//get current weather
router.get('/', weatherController.getCurrentWeather)

module.exports = router