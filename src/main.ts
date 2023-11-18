type Todo = {
  id: string
  title: string
  completed: boolean
}

// strip off id with Omit to allow setting on save
type NewTodo = Omit<Todo, 'id'>
type NewTodoUsingPick = Pick<Todo, "title" |"completed">
const todoA: NewTodo = {
  title: 'Cook Sausages',
  completed: false
}

function saveTodo(todo: NewTodo): Todo {
  /*   write to database for example */
  return {...todo, id: crypto.randomUUID()}
}

function renderTodo(todo: Todo) {
  const div = document.createElement('div')
  div.id = todo.id
  div.innerHTML = todo.title
  const app = document.querySelector<HTMLDivElement>('#app')
  app?.append(div)
}

const savedTodo = saveTodo(todoA)
renderTodo(savedTodo)
