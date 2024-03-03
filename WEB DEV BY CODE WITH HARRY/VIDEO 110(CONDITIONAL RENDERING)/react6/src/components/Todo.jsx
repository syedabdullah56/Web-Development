import React from 'react'
import "./Todo.css"
const Todo = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

export default Todo
