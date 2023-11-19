type ToDo = {
  title: string
  priority: 'High' | 'Medium' | 'Low'
  isComplete: boolean
  description?: string
  dueDate: Date | string
}

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
