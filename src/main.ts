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
const arrayB = [{name: 'Fred', age: 44}, {name: 'Bill', age: 66}]

const returnA = getSecondElement(arrayA)
const returnB = getSecondElement(arrayB)

/* Typescript can imply the return without implicitly defining them */
