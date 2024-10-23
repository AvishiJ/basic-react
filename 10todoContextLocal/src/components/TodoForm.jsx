import React from 'react'
import { useTodo } from '../contexts';
import { useState } from 'react';

function TodoForm() {
    const [todo, setTodo] =useState("")
    const {addTodo}=useTodo()

    const add = (e) =>{
        e.preventDefault()
/* The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.*/
       
    if(!todo) return 
        addTodo({todo, completed :false })
        setTodo("")
    }

    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;