import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App </h1>
        </div>
    )
}

// const ReactElement={  //we are forming a default react element like how would any element actually look like 
//     type : 'a', //a means anchor tag
//     props:{
//         href: 'https://google.com',
//         target :'_blank'
//     },
//     children :'Click me to visit Google'
// }

const anotherElement =(
    <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "reaction"

const reactElement = React.createElement(
    'a',{href: 'https://google.com' , target :'_blank'} ,
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
