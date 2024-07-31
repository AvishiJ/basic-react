import { useState } from 'react'  //it is a hook used to propagate the changes in the UI
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter, setCounter] =useState(15)  //this is always going t return two values in the array , one is a variable and another is a function
  
    // let counter = 15

    //lets create an arroe function with the name as addValue
    const addValue =() =>{
      console.log("value added" ,counter);
      if(counter <20){
      counter=counter +1; }
      setCounter(counter)
    }

    const decValue =() =>{
      console.log("value removed",counter);
      if(counter>0){
      counter=counter-1 ;}
      setCounter(counter);
    }

  return (
    <>
      <h1>Learning the basics of React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={decValue}>Decrease value</button>
    </>
  )
}

export default App
