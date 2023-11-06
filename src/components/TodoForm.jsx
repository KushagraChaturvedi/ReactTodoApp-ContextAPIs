import React, { useState } from 'react'
import { useTodo } from '../context/Todo'

function TodoForm() {
    const {addTodo} = useTodo()
    const [todo, setTodo] = useState("")

    const add = () => {
        addTodo(todo)
        setTodo("")
    }

  return (
    <div className='flex rounded-lg bg-slate-50 overflow-hidden'>
        <input type="text"
        onKeyDown={(e) => (e.key === "Enter") ? add() : setTodo(e.target.value)}
        className='text-slate-900 bg-slate-50 px-4 w-full outline-none'
        placeholder='Write Todo...'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />
        <button 
            className='bg-orange-600 px-4 text-lg py-2 font-semibold'
            onClick={() => add()}
            >Add</button>
    </div>
  )
}

export default TodoForm