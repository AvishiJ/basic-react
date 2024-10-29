import {createSlice , nanoid} from '@reduxjs/toolkit'
/*nanoid generated unique id */

const initialState ={
    todos :[{id:1 ,text:"Hello world"}]

}

export const todoSlice= createSlice({
    name:'todo',  /*name of property*/
    initialState,
    reducers: {  /*isme aati h properties and functions*/
        /* xyz : (state,action) =>{} */
      
        addTodo : (state,action)=>{    /*yahan pe har function mein dena hoga ek state and uska action */
                const todo ={
                    id:nanoid() ,
                    text:action.payload
                }
                state.todos.push(todo)
                /*hmne jo initial state mein state banai h usme todos object mein push krdenge abhi jo naya todo banaya h*/
        } , 
        removeTodo :(state,action) =>{
            state.todos = state.todos.filter((todo) =>todo.id !==action.payload)
       /*jo state ka todo new banega usme value de rhe h purane vale mein filter lagake jo id nhi chahiye payload mein leke uda do */
        },
    } 
})

export const {addTodo, removeTodo}= todoSlice.actions
/*here we are exporting individual functionality kyunki yeh hamare components mein kaam aayegi */

export default todoSlice.reducer
/*store ke liye hme ek baar mein saare reducers ko bhi export krna hoga */


