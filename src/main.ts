const checkLength = (a: string, b: number) => {
  return a.length < b // true or false
}

type returnTypeOfCheckLength = ReturnType<typeof checkLength>
/* type returnTypeOfCheckLength = boolean */
type paramsOfChekcLength = Parameters<typeof checkLength>
/* type paramsOfChekcLength = [a: string, b: number] */
