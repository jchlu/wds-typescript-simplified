// Time to use a specific generic   |      HERE      |
const input = document.querySelector<HTMLInputElement>('.input')
/* Might return a value or undefined */
console.log(input?.value)
/* All is good */

type Person = {
  name: string
  age: number
}

function getSecondElement<ArrayType>(array: ArrayType[]): ArrayType {
  /* Parameter 'array' implicitly has an 'any' type. typescript (7006) [12, 27] */
  return array[1]
}

const arrayA = [1, 2, 3]
const arrayB = [{ name: 'Fred', age: 44 }, { name: 'Bill', age: 66 }]

const returnA = getSecondElement(arrayA)
const returnB = getSecondElement(arrayB)

/* Typescript can imply the return without implicitly defining them */

// A functio to convery and array of tuples to an object
function aToO<T>(array: [string, T][]) {
  const obj: {
    [index: string]: T
  } = {}

  array.forEach(([key, value]) => {
    obj[key] = value
  })

  return obj
}

const arrA: [string, string | number | boolean][] = [
  ["key1", 1],
  ["key2", 'Gravy'],
  ["key3", true]
]

const arrB: [string, string | number][] = [
  ["key1", 1],
  ["key2", "sausages"],
  ["key3", 4]
]
const objA = aToO(arrA)
const objB = aToO(arrB)

console.log(`objA: ${JSON.stringify(objA, null, 4)}`)
console.log(`objB: ${JSON.stringify(objB, null, 4)}`)
