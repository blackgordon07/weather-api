const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const weatherRoutes = require('./routes/weather.routes')
const errorHandler = require('./middleware/error.middleware')

const app = express()

// let server read JSON from request
app.use(express.json())

//logs request in console
app.use(morgan('dev'))

//allows browser calls
app.use(cors())

//routes
app.use('/api/weather', weatherRoutes)

//404 catch-all
app.use((req,res,next)=>{
    res.status(404).json({message:"Route not found"})
})

//error handler
app.use(errorHandler)

module.exports = app