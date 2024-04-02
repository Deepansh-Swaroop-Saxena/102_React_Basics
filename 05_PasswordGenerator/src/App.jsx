import { useCallback, useEffect, useState , useRef} from 'react'



function App() {
  
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordRef = useRef(null)
   


  const passwordgenerator = useCallback(() => {
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let num ="0123456789"
  let char ="!@#$%^&*(){}?"

  if(numAllowed) { str += num}
  if(charAllowed) { str += char }

  for (let i = 1; i <=length; i++){
  const ind = Math.floor((Math.random() * str.length +1))
  pass = pass + str.charAt(ind)

  setPassword(pass)
  
  }

  

  }, [length,numAllowed,charAllowed,setPassword])   //usecCallback(fn, [dependencies])

  const copytoClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password)
     }, [password])
    



  
useEffect(() => {passwordgenerator()}, [length,numAllowed,charAllowed,passwordgenerator])   //useEffect(()=>,[dependencies])


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-3 my-9 bg-gray-800 text-gray-300">
      <h1 className='mb-3 text-center text-lg shadow font-serif'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 text-slate-800'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 '
        placeholder='Password'
        readOnly
        ref={passwordRef}
        
        />

        <button onClick = {copytoClip} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-2 ">Copy</button>
     </div>
        <div className='flex text-sm gap-x-3'>
          <div className='flex items-center gap-x-1 '>
          <input 
          type="range"
          min={8}
          max={50}
          id='passlen'
          className='cursor-pionter'
          value={length}
          onChange={(event) => {setLength(event.target.value)}}
          />
          <label htmlFor='passlen'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultValue={numAllowed}
          id='passwnum'
          onChange={() => {setNumAllowed((prev) => !prev)}}

          />
          <label htmlFor="passwnum">Numbers</label>

          </div>
          <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          defaultValue={charAllowed}
          id='charwnum'
          onChange={() => {setCharAllowed((prev) => !prev)}}

          />
          <label htmlFor="charwnum">Characters</label>
          </div>-

          
        
        </div>
    </div>
    </>
  )
}

export default App
