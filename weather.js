const axios = require('axios')
require('dotenv').config()
const apiKey = process.env.API_KEY

const fetchWeather = async () => {
  const latLong = '40.704,-74.009'
  const darkSkyApi = `https://api.darksky.net/forecast/${apiKey}/${latLong}?exclude=minutely,hourly,daily,flags`

  console.log('9 INSIDE: Running fetchWeather...')

  try {
    const weatherResponse = await axios.get(darkSkyApi)
    console.log('13 INSIDE: Response data -->', weatherResponse.data)
  } catch(err) {
    console.error(err)
  }

  console.log('18 INSIDE: End of fetchWeather...')
}

console.log('21 OUTSIDE: About to run fetchWeather...')

const result = fetchWeather()

console.log(`25 OUTSIDE: fetchWeather ran; result --> ${result}`)

console.log('27 OUTSIDE: We\'ve reached the bottom of weather.js...')
