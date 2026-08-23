
import React, { useState } from 'react'
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [input,setInput] = useState("")
  const [todos,setTodos] = useState([])
  const [editTodo,setEditTodo] = useState(null)
  const toastHandler = (massage) =>{
    toast(massage)
  }

  const addTodoHandler = () => {
    if(!input.trim()){
      return toastHandler("plz enter your task")
    }
    if(todos){
      const existingTodo = todos.map((item) => item.title.includes(input))
      console.log(existingTodo)

      if(existingTodo[0]){
        setEditTodo(null)
        return toastHandler("this item is already in list")
      }
    }

    if(editTodo){
      const updateTodos = todos.map((todo) => todo.id === editTodo ? {...todo , title : input} : todo)
      console.log(updateTodos);
     setTodos(updateTodos)
    setInput("")
      setEditTodo(null)
      return toastHandler("item added")
    }

    

    const todoItem ={
      title : input,
      id: Date.now()
    }


    setTodos((prev) => [...prev, todoItem])
    console.log(todos)
    setInput("")
  }

  const editTodoHandler = (id) =>{
  
    let editItem = todos.find((item) => item.id == id)
       console.log(editItem)
    // setTodos(updateTodos)
    setInput()
       setEditTodo(editItem.id)
       setInput(editItem.title)
  }

  const deleteTodoHanlder = (id) => {
    console.log(id);
        let deleteTodo = todos.filter((item) => item.id !== id)

        setTodos(deleteTodo)
        
  }
  
  
  
  

  return (
    <div className="bg-[#0f172a] min-h-screen w-full flex flex-col items-center py-10 ">
       <div className='  shodow-md w-[450px] rounded-2xl bg-[#1e293b]  m-10 pb-6 auto-grow '>
        <h1 className='text-2xl font-bold text-white text-center m-3'>Todo Application</h1>
        <div className='h-[60px] bg-[#0f172a] rounded-2xl flex justify-between p-4 item-center m-4' >
          <input 
          type="text" 
          placeholder='Enter your task' 
          className='text-white outline-none w-[80%] '
          onChange={(e) => setInput(e.target.value)}
          value={input}
          />
          <button onClick={addTodoHandler}
           className='w-[70px] h-[40px] text-white p-2 bg-[blue] rounded-2xl font-bold cursor-pointer'
           >{editTodo ? "Update" : "Add"} </button>
        </div>
  
     
       {todos.length > 0 ? todos.map((todo) => (
          <TodoItem deleteTodoHanlder={deleteTodoHanlder} editTodoHandler ={editTodoHandler} key={todo.id} todo={todo} />
        )) : <p className='text-white text-center'>No Todos</p>}
       </div>
         <ToastContainer />
    </div>
    
  )
}


export default App


const TodoItem = ({todo , editTodoHandler , deleteTodoHanlder}) => {
  return(
    <div>
       
      <div className='w-[91%] bg-[#0f172a] rounded-2xl p-6 flex justify-between m-1 gap-5px mb-3 ml-5'>
        <p className='text-[white]'>{todo.title}</p>
        <div className='flex gap-4 '>
          <button className='text-[green] cursor-pointer ' onClick={() => editTodoHandler(todo.id)}>Edit</button>
          <button className='text-[red] cursor-pointer' onClick={() => deleteTodoHanlder(todo.id)}>Delete</button>
        </div>
    
      </div>
      
      
      
    </div>
    
  )
}


