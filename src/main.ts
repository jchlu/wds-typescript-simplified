type Person = {
  name: string
  age: number
  isProgrammer?: boolean
  address?: {
    houseNumber: number
    street: string
  }
}

const personA: Person = {
  name: "Johnny",
  age: 99,
  isProgrammer: true,
}

const personB: Person = {
  name: "Zuby",
  age: 21,
  address: {
    houseNumber: 45,
    street: 'Main Street',
  },
}

console.log('Hi from Vite')
let a: number = 4

const b = [1, 2, 3]

b.push(4)


