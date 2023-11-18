type Todo = {
  id: string
  title: string
  description?: string
  completed: boolean
}

// Examples of Required and Partial
type StrictTodo = Required<Todo>
/* type StrinctTodo = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
} */

type OtherTodo = Partial<Todo>
/* type OtherTodo = {
    id?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    completed?: boolean | undefined;
} */

// Use in combination with Pick / Omit to create type with a single source of truth

type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>> & T
type PartialPick<T, Key extends keyof T> = Partial<Pick<T, Key>> & Omit<T, Key>

// strip off id with Omit to allow setting on save
type NewTodo = Omit<Todo, 'id'>
// created new type by picking only what you need (for different reasons)
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
