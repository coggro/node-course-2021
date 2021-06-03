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
