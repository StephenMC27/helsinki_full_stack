import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CityWeather = ({ city }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const params ={
      access_key: process.env.REACT_APP_API_KEY,
      query: city,
      units: 'f'
    }
    axios
      .get('http://api.weatherstack.com/current', {params})
      .then(response => {
        console.log('weather data received')
        console.log('API response', response.data.current)
        setWeather(response.data.current)
      })
    }, [city])
  
  return (
    <div>
      {
        weather 
        ?
        <div>
          <p><strong>Temperature:</strong> {weather.temperature} Fahrenheit</p>
          <img src={weather.weather_icons[0]} alt="WEATHER ICON" />
          <p><strong>Wind:</strong> {weather.wind_speed} mph direction {weather.wind_dir}</p>
        </div>
        :
        <p>Loading weather data...</p>
      }
    </div>
  )
}

export default CityWeather;