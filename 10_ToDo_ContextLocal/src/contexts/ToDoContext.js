import {useContext, createContext} from "react"

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todomsg",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id,todo)=>{},
    toggleComplete: (id)=>{}
})


export const useToDo = ()=>{
    return useContext(ToDoContext)
}


export const ToDoProvider = ToDoContext.Provider