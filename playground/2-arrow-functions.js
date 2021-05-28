// OG function declaration
// const square = function (x) {
//   return x * x
// }

// Arrow fx
// const square = (x) => {
//   return x * x
// }

// Arrow fx w/ shorthand
// const square = (x) => x * x

// console.log(square(3))

const event = {
  name: `Birthday Party`,
  guestList: [`Andrew`, `Jen`, `Mike`],
  // This alternative syntax binds this, but is shorter
  printGuestList() {
    // this isn't bound in an arrow function, so function fails
    console.log(`Guest List for ${this.name}`)
    // We don't want to bind this here, so arrow functions are
    // helpful since we don't want the printGuestList this value
    this.guestList.forEach((guest) =>
      console.log(`${guest} is attending ${this.name}`)
    )
  },
}

event.printGuestList()
