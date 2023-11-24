// Function Overloading

function sum(a: number[]): number
function sum(a: number, b: number): number
function sum(a: number | number[], b?: number) {
  if (Array.isArray(a)) {
    return a.reduce((acc, val) => acc + val, 0)
  } else {
    return b ? a + b : null
  }
}

const arrA = [1, 2, 3]

const res1 = sum(arrA)
const res2 = sum(3, 4)
// const res3 = sum(arrA, 5) // FAILS
/* Argument of type 'number[]' is not assignable to parameter of type 'number'.
 * typescript (2345) [17, 18] */
console.log(`Result of res1: ${res1}`)
console.log(`Result of res2: ${res2}`)

// Descriminat[ed | ing] Union

type SuccessResponse = {
  status: 'Success'
  data: { id: string; name: string }
}

type ErrorRensponse = {
  status: 'Error'
  message: string
}

/* This is known as a Descriminated Union */
type UserApiResponse = ErrorRensponse | SuccessResponse

const handleUserApiResponse = (res: UserApiResponse) => {
  if (res.status === 'Success') {
    // (parameter) res: SuccessResponse
    console.log(res.data.name) // no need to check - data must exist
  } else {
    // (parameter) res: ErrorRensponse
    console.log(res.message) // no need to check - message must exist
  }
}

type ToDo = {
  title: string
  priority: 'High' | 'Medium' | 'Low'
  isComplete: boolean
  description?: string
  dueDate: Date | string
}

const ourTodo = {
  title: 'Give an example of satisfies',
  priority: 'Low',
  isComplete: true,
  description: 'Because dueDate is more specific, using satisfies narrows it!',
  dueDate: new Date(),
} satisfies ToDo

/* const ourTodo: {
  title: string;
  priority: "Low";
  isComplete: true;
  dueDate: Date; // NOTE - THIS IS SPECIFICALLY A DATE OBJECT HERE
} */

function extendToDo(todo: ToDo) {
  if (typeof todo.dueDate === 'string') {
    console.log(todo.dueDate.trim()) // (property) dueDate: string
  } else {
    console.log(todo.dueDate.getTime()) // (property) dueDate: Date
  }
}

function extendToDo2(todo: ToDo) {
  if (todo.dueDate instanceof Date) {
    console.log(todo.dueDate.getTime()) // (property) dueDate: Date
  } else {
    console.log(todo.dueDate.trim()) // (property) dueDate: string
  }
}

const switchOnToDoPriority = (todo: ToDo) => {
  switch (todo.priority) {
    case 'Low':
      console.log(todo.priority)
      break
    case 'Medium':
      console.log(todo.priority)
      break
    case 'High':
      console.log(todo.priority)
      break
    default:
      /* This can never be reached, so it's a safety check */
      const a: never = todo.priority
      return a
  }
}
