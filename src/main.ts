type Address = {
  houseNumber: number
  street: string
}

type Person = {
  name: string
  age: number
  isProgrammer?: boolean
  address?: Address
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

function printPerson(person: { name: string }) {
  console.log(`Hey there ${person.name}`)
}

printPerson({ name: 'Johnny' })
// Next call errors because you're explicitly setting a variable that doesn't exist on the function
printPerson({ name: 'Stanley', age: 88 }) 
// Whereas:
printPerson(personB) // Works just fine
