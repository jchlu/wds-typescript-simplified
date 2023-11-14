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

// The void return type is infered here as there is never anything returned.
// Add a 'return' keyword without anything after it also imlies a void function return.
function printPerson(person: { name: string }): void {
  console.log(`Hey there ${person.name}`)
}

printPerson({ name: 'Johnny' })
// Next call errors because you're explicitly setting a variable that doesn't exist on the function
// printPerson({ name: 'Stanley', age: 88 }) 
// Whereas:
printPerson(personB) // Works just fine

//Optional params

function printInfo(info: { name: string }, options?: { debug: boolean }) {
  options?.debug ? console.table(info) : console.log(info.name)
}

printInfo(personB)
printInfo(personB, { debug: true })

/* Descructuring */

type Options = {
  debugMode?: boolean
  indentLevel?: number
}

//        function name  |-- no descruturing here--||-- destructuring using types      w/ default \/
function printNameAndAge(name: string, age: string, { debugMode = false, indentLevel }: Options = {}) {
  console.log(name, age, debugMode, indentLevel)
}

function numbersWithCallback(a: number, b: number, calback: (calculated: number) => void) {
  // calback(a + b) // prints: 7
  calback(a * b)    // prints: 10
}

numbersWithCallback(2, 5, (input) => {
  console.log(input)
})

/* This can also be written by defining the callback function type */

type PointlessConsoleFunction = (calculated: number) => void

function anotherFuncWithCallback(a: number, b: number, calback: PointlessConsoleFunction) {
  calback(a + b) // prints: 7
}

anotherFuncWithCallback(2, 5, (input) => {
  console.log(input)
})

