import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 10

  const [counter,setCounter] = useState(0)      //useState -  hook to propage the change in state of the page or element in pagehook used to propagate changes in react in the dom here once a variable is changed react reacts aand changes the the rekated elents in don//


  const addValue = () => {
    console.log("button clicked",Math.random())
    // counter = counter + 1
    // console.log(counter);


    setCounter(counter+1)
    // setCounter(counter => counter+1)
    // setCounter(counter => counter+1)
    // setCounter(counter => counter+1)  // # imp here in setCounter(()=>{}) so here we have a hidden feature that we have a func in it so if u want to change value u do like this 
     
    
    
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>DEXTER'S LABORATORY</h1>
      <h2>Count Value: {counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button> <br /><br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Version Value : {counter}</p>
    </>
  )
}

export default App
