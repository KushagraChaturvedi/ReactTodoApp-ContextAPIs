import React, { useEffect, useState } from 'react'
import { TodoContextProvider } from './context/Todo'
import { TodoItem, TodoForm } from './components'

function App() {
  const [todos, setTodos] = useState([

  ])

  const addTodo = (text) => {
    setTodos((prevTodos) => [{ id: Date.now(), text, completed: false }, ...prevTodos])
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => (prevTodos.filter((todo) => todo.id !== id)))
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? todo.text = todo : todo))
  }
  
  const toggleComplete = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id) ? {...todo, completed: !todo.completed} : todo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)}
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className='bg-slate-800 min-h-screen text-gray-200 flex place-items-center place-content-center'>
        <div className='flex flex-col gap-4'>
          <h1 className="text-4xl self-center">📝 To Do App</h1>

          {/* Todo Form for adding Todo */}
          <TodoForm />

          {/* Loop through all todos */}
          <div className='flex flex-col gap-2'>
            {todos.map(({ id, text, completed }) => (
              <div key={id}>
                <TodoItem todo={{ id, text, completed }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App