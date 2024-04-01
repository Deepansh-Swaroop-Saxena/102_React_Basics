import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1 className='bg-purple-400 text-black p-4 rounded-xl mb-4' >Tailwind Test</h1>
    <Card username="Amil" btnText="Contact"/>  // array ya object pass krna hoga to pehle aik variable mai store krke fir {} mai lih k u can pass
    <Card username="Aditya" btnText="Visit"/>

   </>
  )
}

export default App
