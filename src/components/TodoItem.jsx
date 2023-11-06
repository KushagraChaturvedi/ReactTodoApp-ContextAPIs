import React, { useState } from 'react'
import { useTodo } from '../context/Todo'

function TodoItem({todo}) {

  const [ text, setText ] = useState(todo.text)
  const [ todoEditable, setTodoEditable ] = useState(false)
  const { deleteTodo, updateTodo, toggleComplete }  = useTodo()

  const editTodo = () => {
    updateTodo(text)
    setTodoEditable(false)
    return
  }

  return (
    <div className={`flex ${todo.completed ? "bg-slate-400" : "bg-slate-200"} border rounded-lg overflow-hidden px-4 py-2`}>

        <input type="checkbox" 
            className='cursor-pointer'
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)} />

        <input
            className={`${todo.completed ? "line-through bg-slate-400" : ""} bg-slate-200 px-4 text-lg text-gray-900 font-semiboldbold outline-none`} 
            onKeyDown={(e) => (e.key === "Enter") ? editTodo() : setText(e.target.value)}
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            readOnly={!todoEditable} />

        <button
          className='text-orange-600 text-4xl pr-4 w-full'
          onClick={() => {
            if (todoEditable) editTodo()
            else setTodoEditable(true)
          }}
          >{todoEditable ? "📁" : "✎" }</button>
        
        <button
          className='text-3xl text-red-700 w-full'
          onClick={() => {
            deleteTodo(todo.id)
            console.log(todo.id)
          }}
          >X</button>
    </div>
  )
}

export default TodoItem