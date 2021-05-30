import request from 'request'
import mock from './mock.json'

const url = `http://api.weatherstack.com/current?access_key=37fed71c74e1f5c33dd15c4f2596db33&query=37.8267,-122.4233`

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
})
