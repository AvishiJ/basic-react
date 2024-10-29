import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
/*useDispatch connects this component to the Redux store, enabling it to update the central state from within a functional component.*/

import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

  const [input,setInput]= useState('')
  const dispatch =useDispatch()
/*dispatch reducer ka use krke store mein value add krta h */
  
  const addTodoHandler=(e)=>{
    e.preventDefault()
    dispatch(addTodo(input)) 
/*dispatches the addTodo action with the input as the payload. When this action is dispatched, the Redux reducer for addTodo adds the new todo to the todos array in the store.*/
    
    setInput('') /*resets the input field*/
  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo