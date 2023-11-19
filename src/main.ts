// Descriminat[ed | ing] Union

type SuccessResponse = {
  status: "Success"
  data: { id: string, name: string }
}

type ErrorRensponse = {
  status: "Error"
  message: string
}

type UserApiResponse = ErrorRensponse | SuccessResponse

const handleUserApiResponse = (res: UserApiResponse) => {
  if (res.status === 'Success') {
    // (parameter) res: SuccessResponse
    console.log(res.data.name) // no need to check - data must exist
  }
  else {
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
  dueDate: new Date()
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
