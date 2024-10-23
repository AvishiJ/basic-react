import { useState ,useEffect} from 'react'
import { TodoProvider } from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos,setTodos]=useState([]) //empty array for adding todos

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo}, ...prev ] ) /*id vala part is the object we pass for todo and baad mein ...todo means uska bacha hua portion */
    /*on the basis of prev array it will generate an array which has both current todo and previous ones too because after setTodos purane vale lost hoja rhe the */
  }

  const updateTodo=(id, todo)=>{
    setTodos((prev)=> prev.map((each)=>(each.id === id ? todo : each )))
    /*remember hme ek loop lagakr us vale todo pe jana hoga jisko update krna h toh uske liye map laga rhe h
    each is the loop variable for each todo and id current vale todo ki h
    isme agar id same aajaye loop se toh un values ko update krdo , vrna jaisa todo tha vaisa rhne do*/
  }

const deleteTodo= (id) =>{
  setTodos((prev)=>prev.filter((todo)=> todo.id !==id))
  /*The filter() method creates a new array filled with elements that pass a test provided by a function*/
/*here we are forming a new array without that todo which we are deleting by matching its id */
}

/*function where we will mark if the todo has been completed or not */
const toggleComplete=(id)=>{
    setTodos((prev) => prev.map((each) =>each.id === id ?
    {...each, completed : !each.completed}
    : each ) )
}

//Local Stprage part
useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length >0){
      setTodos(todos)
    }
  },[])
  /*in localstorage everything is stored as a string */

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])
/*converting the json format of todos to string again */


  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */} 
              <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo)=> (
                <div key={todo.id}
                className='w-full'>
                   <TodoItem todo={todo}  /> 
                </div>
              ))}
          </div>
      </div>
  </div>
  </TodoProvider>
  )
}

export default App
