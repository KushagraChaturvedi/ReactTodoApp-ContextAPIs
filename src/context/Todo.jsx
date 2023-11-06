import { createContext, useContext, useState } from "react";

const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}