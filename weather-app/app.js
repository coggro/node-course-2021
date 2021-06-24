import forecast from './utils/forecast.js'
import geocode from './utils/geocode.js'

const location = process.argv[2]

if (location) {
  geocode(location, (err, { latitude, longitude, location } = {}) => {
    if (err) {
      return console.log(err)
    }
    forecast(latitude, longitude, (err, forecastData) => {
      if (err) {
        return console.log(err)
      }
      console.log(location)
      console.log(forecastData)
    })
  })
} else {
  console.log(`Please provide a location in the CLI args.`)
}
