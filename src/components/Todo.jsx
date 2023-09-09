import React, { useState } from 'react'
import Todolist from './Todolist'

const Todo = () => {
 const [inputValue, setInputValue] = useState(" ");
 const [todos, setTodos] = useState([])

 const formSubmit =(e)=>{
  e.preventDefault()
  setTodos([...todos, {text:inputValue, num:Date.now()}])
  setInputValue(" ")
 }

 function deleteTask(num){
  setTodos(todos.filter((todo)=> todo.num !== num))
 }


  return (
    <div>
     <form onSubmit={formSubmit}>
     <input type="text" placeholder='Enter your task...' value={inputValue}  onChange={(e)=> {
      setInputValue(e.target.value)
     }}/>

     <button>Add</button>
     </form>
     
     <Todolist todos = {todos} deleteTask={deleteTask}/>
    </div>
  )
}

export default Todo