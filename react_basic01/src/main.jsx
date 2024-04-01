import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp()
// {
//   return(
//     <h1>Custom Made App!!</h1>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'http://google.com',
//       target: '_blank'
//   },
//   children: 'Click to open google'
// }


const anotherElement = (
  <a href='http://google.com' target='_blank'>Visit Google</a>
)

const Username = "Dexter's Laboratory"

const ReactElementok = React.createElement(
  'a',
  {href:'http://google.com',target:'_blank'},
  'Click to open GOOGLE',

  Username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App/>
    // anotherElement
    // ReactElementok
  
)
