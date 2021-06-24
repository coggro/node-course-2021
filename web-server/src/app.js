// import express
import express from 'express'
import path from 'path'

// modules workaround
// requires path as well, but not doubly imported
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// end workaround

// call express to create server
const app = express()

app.use(express.static(path.join(__dirname, `..`, `/public`)))

app.get(`/weather`, (req, res) => {
  res.send({
    forecast: `The weather forecast is that there will be weather whether or not you can weather it.`,
    location: `Hatboro, PA`,
  })
})

// Set the server to listen on a prescribed port
app.listen(`3000`, () => {
  console.log(`Server is up on localhost:3000`)
})
