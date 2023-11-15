type Address = {
  houseNumber: number
  street: string
}

type Person = {
  name: string
  age: number
  isProgrammer?: boolean
  address?: Address
  skillLevel: 'Beginner' | 'Intermidiate' | 'Advanced'
}

function printSkillLevel(skillLevel: Person['skillLevel']) {
  console.log(`Skill Level ${skillLevel ? skillLevel : 'Not Set'}`)
}

/* Intersection / Union    \/             \/      */
type PersonWithId = Person & { id: string | number }

type ImutableId = {
  readonly id: string | number
}

type PersonWithImutableId = Person & ImutableId

const personF: PersonWithImutableId = {
  id: '567567-345345-345345-rter-45345',
  name: "Bertrand",
  age: 33,
  isProgrammer: false,
  skillLevel: "Beginner"
}

personF.isProgrammer = true // Works just fine
// personF.id = '123' // Fails because id is `readonly`

const personG: PersonWithImutableId = {
  ...personF,
  skillLevel: 'Intermidiate'
}

printSkillLevel(personG['skillLevel'])
printSkillLevel(personF['skillLevel'])

type PeopleGroupedBySkillLevel = {
  [index in Person['skillLevel']] : Person[]
}

const levels: PeopleGroupedBySkillLevel = {
  Beginner: [{ name: 'Frank', age: 22, skillLevel: 'Beginner' }],
  Intermidiate: [],
  Advanced: []
}

/* Interface syntax is slightly different */
interface PersonWithCar extends Person { make: string, model?: string }

const personE: PersonWithCar = {
  name: 'Harry',
  age: 44,
  make: 'Ford',
  skillLevel: 'Intermidiate'
}

console.log(JSON.stringify(personE, null, 4))

const personC: PersonWithId = {
  id: '345kh34j5h2lk34h5', // Type error without this field due to the Intersection
  name: 'NormaJean',
  age: 55,
  skillLevel: 'Advanced'
}

const personD: PersonWithId = {
  id: 7654321, // Also OK becuase of the Union type definition
  name: 'Stanley',
  age: 66,
  skillLevel: 'Advanced'
}

const personA: Person = {
  name: "Johnny",
  age: 99,
  isProgrammer: true,
  skillLevel: 'Beginner'
}

const personB: Person = {
  name: "Zuby",
  age: 21,
  address: {
    houseNumber: 45,
    street: 'Main Street',
  },
  skillLevel: 'Advanced'
}

const car: { make: string, model?: string } = { make: 'Mercedes-Benz', model: 'SLK' }
const cars: (typeof car)[] = [] // Infers the `typeof` the car object

cars.push(car)
cars.push({ make: 'Nissan', model: 'Skyline' })

console.log(JSON.stringify(cars, null, 4))

// The void return type is infered here as there is never anything returned.
// Add a 'return' keyword without anything after it also imlies a void function return.
function printPerson(person: { name: string }): void {
  console.log(`Hey there ${person.name}`)
}

type PrintFunc = typeof printPerson // create a function type after the initial function declaration

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

