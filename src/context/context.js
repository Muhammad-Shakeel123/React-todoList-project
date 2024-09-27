import React from "react";
import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo message",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => {}
})

export const Todoprovider = todoContext.Provider

export default function useTodo() {
    return useContext(todoContext);
}

