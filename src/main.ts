// Example of using the Record type
type Person = {
  name: string
  age: number
}

type PeopleGroupedByName1 = { [index: string]: Person[] }
/* Can be rewritten usinf Record: */

type PeopleGroupedByName2 = Record<string, Person[]>
/* or, more spefifically if required: */

type PeopleGroupedByName3 = Record<Person["name"], Person[]>

type FinalImmutablePerson = Readonly<Person>
/* type FinalImmutablePerson = {
    readonly name: string;
    readonly age: number;
} */

const checkLength = (a: string, b: number) => {
  return a.length < b // true or false
}

type returnTypeOfCheckLength = ReturnType<typeof checkLength>
/* type returnTypeOfCheckLength = boolean */
type paramsOfChekcLength = Parameters<typeof checkLength>
/* type paramsOfChekcLength = [a: string, b: number] */
