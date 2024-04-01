import { useState } from 'react'


function App() {
  const [color,setColor] = useState("white")

  return (
    <div className='w-screen h-screen duration-200'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3'>
      <div className='fixed flex flex-wrap bottom-12 gap-3 px-3 py-2 
      rounded-xl bg-slate-600 shadow-lg justify-center'>

        <button onClick={() => setColor("crimson")} className='ouline-none px-3 py-2 rounded-xl text-white' 
        style={{backgroundColor:"crimson"}}>Crimson</button>

        <button onClick={() => setColor("coral")} className='ouline-none px-3 py-2 rounded-xl text-white' 
        style={{backgroundColor:"coral"}}>Coral</button>

        <button onClick={() => setColor("darkgreen")} className='ouline-none px-3 py-2 rounded-xl text-white' 
        style={{backgroundColor:"darkgreen"}}>Green</button>
        
        <button onClick={() => setColor("indigo")} className='ouline-none px-3 py-2 rounded-xl text-white' 
        style={{backgroundColor:"indigo"}}>Indigo</button>

        <button onClick={() => setColor("darkcyan")} className='ouline-none px-3 py-2 rounded-xl text-white' 
        style={{backgroundColor:"darkcyan"}}>Cyan</button>

        <button onClick={() => setColor("orange")} className='ouline-none px-3 py-2 rounded-xl text-white' 
        style={{backgroundColor:"orange"}}>Orange</button>

        <button onClick={() => setColor("navy")} className='ouline-none px-3 py-2 rounded-xl text-white' 
        style={{backgroundColor:"navy"}}>Navy</button>


        <button onClick={() => setColor("black")} className='ouline-none px-3 py-2 rounded-xl text-white' 
        style={{backgroundColor:"black"}}>Black</button>

        <button onClick={() => setColor("goldenrod")} className='ouline-none px-3 py-2 rounded-xl text-white' 
        style={{backgroundColor:"goldenrod"}}>Gold</button>
      </div>
      </div>


    </div>
  )
}

export default App
