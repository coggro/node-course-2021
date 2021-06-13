// First argument is a callback fx, a function that is passed as an
// argument to be called later on. setTimeOut is async, but the
// callback pattern is not necessarily async.
setTimeout(() => {
  console.log(`Two seconds are up`)
}, 2000)

// This is a synchronous callback pattern
const names = [`andrew`, `jen`, `jess`]
const shortNames = names.filter((name) => {
  return name.length <= 4
})

const geocode = (address, callback) => {
  setTimeout(() => {
    // mock data
    // when inside setTimeout, it messes with console.log sync code
    const data = {
      latitude: 0,
      longitude: 0,
    }
    // return data

    // can instead use the callback on the data
    callback(data)
  }, 2000)

  // could return here, or could do callback
  // sans callback, not async
  // return data
}

// Sans callback, not async
// Not actually useful when we use async callback
// const data = geocode(`Philadelphia`)
// console.log(data)

// can then use the callback to process the data
geocode(`Philadelphia`, (data) => {
  console.log(data)
})

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num, ber, callback) => {
  setTimeout(() => {
    callback(num + ber)
  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum) // Should print: 5
})
