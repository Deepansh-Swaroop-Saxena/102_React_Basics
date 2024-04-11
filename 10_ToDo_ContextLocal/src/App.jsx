import { useEffect, useState } from 'react'
import { ToDoProvider } from './contexts'
import './App.css'
import { ToDoForm } from './components'
import {ToDoItem} from './components'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev]) //here todo is a new value object that will be entered 
  }
  // console.log(todos);

  const updateTodo = (id,todo) => {
   setTodos((prev)=> prev.map((val)=>val.id === id ? todo : val )) // if yes then todo added else val that is old previos value only 
  }

  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((val)=> val.id !== id)) // basically prev hereis an array of objects and value is each object in that array can understand as if its a todo ---. prevtodo
  }
  const toggleComplete = (id)=>{
    setTodos((prev)=> prev.map((val)=> val.id===id ? {...val,completed: !val.completed }: val))   // here value of object added using spread and then completed is overwritten
     
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0 )
    {
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos),[todos])
  })

  

  return (
    <ToDoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#0e1d34] min-h-screen py-8 rounded-xl">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold shadow-lg text-center mb-8 mt-2">Manage Your Todos..!!</h1>
                    <div className="mb-4">
                        <ToDoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <ToDoItem todo={todo}/>

                          </div>
                        ))}
                    </div>
                </div>
            </div>
     </ToDoProvider>
  )
}

export default App
