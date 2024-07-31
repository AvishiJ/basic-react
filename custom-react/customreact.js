//since this function will be a dom element , it must have a domElement and a container too.

function customRender(reactElement ,container){  //this function is like creating a DOM  element to render our element
       /* const domElement =document.createElement(reactElement.type)
        domElement.innerHTML =reactElement.children
        domElement.setAttribute('href',reactElement.props.href)
        domElement.setAttribute('target',reactElement.props.target)
        container.appendChild(domElement)    
        */

        const domElement =document.createElement(reactElement.type)
        domElement.innerHTML =reactElement.children    
        for (const prop in reactElement.props) {
            if(prop === 'children') continue;
            domElement.setAttribute(prop, reactElement.props[prop])
        }
        container.appendChild(domElement)
    }

const reactElement={  //we are forming a default react element like how would any element actually look like 
    type : 'a', //a means anchor tag
    props:{
        href: 'https://google.com',
        target :'_blank'
    },
    children :'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,  mainContainer)