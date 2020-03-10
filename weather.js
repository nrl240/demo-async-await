const { apiKey } = require('./config')
const axios = require('axios')

const fetchWeather = async () => {
  const latLong = '40.704,-74.009'
  const darkSkyApi = ` https://api.darksky.net/forecast/${apiKey}/${latLong}?exclude=minutely,hourly,daily,flags`

  console.log('INSIDE: Running fetchWeather...')
  try {
    const weatherResponse = await axios.get(darkSkyApi)
    console.log('INSIDE: Response data -->', weatherResponse.data.currently)
  }
  catch (err) {
    console.error(err)
  }

  console.log('INSIDE: End of fetchWeather...')
}

console.log('OUTSIDE: About to run fetchWeather...')

const result = fetchWeather()

console.log(`OUTSIDE: fetchWeather ran; result --> ${result}`)

console.log('OUTSIDE: We\'ve reached the bottom of weather.js...')
