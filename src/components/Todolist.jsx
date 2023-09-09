import React from 'react'

const Todolist = ({todos, deleteTask}) => {

  return (
    <div>
     <ol>
      {
       todos.map((todo)=>(
        <li key={todo.num}>{todo.text}  <button onClick={()=>deleteTask(todo.num)}>Delete</button></li>)
       )
      }
     </ol>
     
    </div>
  )
}

export default Todolist