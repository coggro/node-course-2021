// Object property shorthand
const name = `Corey`
const userAge = 31

const user = {
  name,
  userAge,
  location: `Philadelphia`,
}

console.log(user)

// Object destructuring

const product = {
  label: `Red Notebook`,
  price: 3,
  stock: 201,
  salePrice: undefined,
}

const { label, price, stock, salePrice, rating = 5 } = product

console.log(label, price, stock, salePrice, rating)

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction(`order`, product)
