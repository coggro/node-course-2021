import request from 'request'
import geoMock from './geoMock.json'
import weatherMock from './weatherMock.json'
import { mapboxKey, weatherstackKey } from './keys.js'

const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Hatboro.json?access_token=${mapboxKey}&limit=1&language=en`

const weatherURL = `http://api.weatherstack.com/current?access_key=${weatherstackKey}&query=${geoMock.features[0].center[1]},${geoMock.features[0].center[0]}&units=f`

// *** Geo Request ***
request({ url: geoURL, json: true }, (error, response) => {
  if (error) {
    console.log(error)
  } else if (response.body.features.length === 0) {
    console.log(`No results returned.`)
  } else {
    const LAT = response.body.features[0].center[1]
    const LON = response.body.features[0].center[0]
    console.log(`Lat: ${LAT}, Lon: ${LON}`)
  }
})

// *** Weather Request ***
// request({ url: weatherURL, json: true }, (error, response) => {
//   console.log(response.body)
// })

// console.log(`WeatherURL: ${weatherURL}`)
// console.log(
//   `${weatherMock.current.weather_descriptions}. It is currently ${weatherMock.current.temperature} degrees out. It feels like ${weatherMock.current.feelslike} degrees out.`
// )
