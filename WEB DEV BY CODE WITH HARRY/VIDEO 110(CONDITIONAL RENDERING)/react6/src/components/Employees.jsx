import React from 'react'
import "./Employees.css"
const Employees = (props) => {
  return (
    <div>
       <h1>{props.jobtitle}</h1>
      <p>{props.salary}</p>
      <p>{props.id}</p>
    </div>
  )
}

export default Employees
