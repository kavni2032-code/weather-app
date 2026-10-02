import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InfoBox from './InfoBox'
const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = import.meta.env.VITE_WEATHER_KEY

function SearchBox() {
  const [city, setCity] = useState('')
  const [info, setInfo] = useState(null)

  const getWeatherInfo = async (cityName) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
      )
      const jsonResponse = await response.json()
      console.log(jsonResponse)

    const result = {
        city: cityName,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        windSpeed: jsonResponse.wind.speed,
        description: jsonResponse.weather[0].description,
      }
      setInfo(result)
    } catch (error) {
      console.log('Something went wrong:', error)
    }
  }

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getWeatherInfo(city)
    setCity('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="City Name"
        variant="outlined"
        required
        value={city}
        onChange={handleChange}
      />
      <Button variant="contained" type="submit" sx={{ ml: 2, height: 56 }}>
        Search
      </Button>
      {info && <InfoBox info={info} />}
    </form>
  )
}

export default SearchBox