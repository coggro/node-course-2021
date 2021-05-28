import fs from 'fs'

// const book = {
//   title: `Ego Is The Enemy`,
//   author: `Ryan Holiday`,
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync(`1-json.json`, bookJSON)

// const dataBuffer = fs.readFileSync(`1-json.json`)
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const data = JSON.parse(fs.readFileSync(`1-json.json`).toString())
console.log(data)
data.name = `Corey`
data.age = 31
fs.writeFileSync(`1-json.json`, JSON.stringify(data))
const modifiedData = JSON.parse(fs.readFileSync(`1-json.json`).toString())
console.log(modifiedData)
