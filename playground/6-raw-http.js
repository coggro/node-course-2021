import http from 'http'

import { weatherstackKey } from '../weather-app/keys.js'

const url = `http://api.weatherstack.com/current?access_key=${weatherstackKey}&query=40,-75&units=f`

let request = http.request(url, (res) => {
  let data = ``

  res.on(`data`, (chunk) => {
    data += chunk.toString()
    console.log(data + `\n\n`)
  })

  res.on(`end`, () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on(`error`, (error) => {
  console.log(`Error: `, error)
})

request.end()
