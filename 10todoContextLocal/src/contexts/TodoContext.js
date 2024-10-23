import { createContext,useContext } from "react";

export const TodoContext= createContext({
    todos:[   /*it is a variable */
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        },
    ],
    addTodo : (todo)=>{},
    updateTodo:(id,todo) =>{},
    deleteTodo :(id)=>{},
    toggleComplete : (id)=>{}                     /*clicking on checkbox of completed */
})

export const TodoProvider =TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}