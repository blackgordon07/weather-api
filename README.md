# Weather API

A simple RESTful Weather API built with Node.js and Express. It fetches real-time weather data (temperature and description) for any city using the OpenWeatherMap API.

## Tech Stack
Node.js
Express.js
Axios (for making HTTP requests to the weather service)

## Features
Get current weather by city name
Supports temperature units: Celsius (metric), Fahrenheit (imperial), or Kelvin (standard)
Clean JSON responses
Basic error handling for invalid cities or API issues

## Installation

1. Clone the repository:
   git clone https://github.com/blackgordon07/weather-api.git
   cd weather-api

2. Install dependencies:
   npm install

## Environment Variables

Create a .env file in the root directory with the following content:

PORT=8000
WEATHER_API_KEY=your_openweathermap_api_key_here

Get your free API key here: https://home.openweathermap.org/api_keys

## Running the App

Start the server with:

npm start

The API will be available at: http://localhost:8000 (or your chosen PORT)

## Endpoints

### Get Current Weather by City

Method: GET  
Path: /weather  
Query Parameters:  
city (required)       → City name, e.g. Lagos, London, New York  
units (optional)      → metric (Celsius - default), imperial (Fahrenheit), standard (Kelvin)

Example Requests:
http://localhost:8000/weather?city=Lagos
http://localhost:8000/weather?city=Paris&units=imperial

Example Success Response (JSON):
{
  "city": "Lagos",
  "temperature": "29°C",
  "description": "clear sky"
}

Example Error Response (JSON):
{
  "error": "City not found or API error"
}

## Notes / Important Info
This project uses the OpenWeatherMap free tier by default (60 calls/minute limit, 1 million calls/month).
Temperature is shown in °C by default (metric units).
Make sure your API key is valid and not expired.
For production, consider adding rate limiting, caching, and more detailed error messages.

