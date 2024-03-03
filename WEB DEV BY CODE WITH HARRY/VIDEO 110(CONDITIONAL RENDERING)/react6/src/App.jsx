import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Employees from './components/Employees'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [showbtn1, setshowbtn1] = useState(true)
  const [todo, setTodo] = useState([
    {
     title:"Goals Todo",
     desc:"I have achieved my goals"
    },
    {
      title:"Exercise Todo",
      desc:"I have achieved my exercise goals"
     },
     {
      title:"Books Todo",
      desc:"I have achieved my book goals"
     }
  ])
  const [employees, setEmployees] = useState([
    {
      jobtitle:"General Manager",
      salary:75538977,
      id:123
     },
     {
      jobtitle:" Manager",
      salary:755389,
      id:124
     },
     {
      jobtitle:"Assistant Manager",
      salary:75538,
      id:125
     },
  ])
  
  

  return (
    <>
    {employees.map(employees=>{
      return <Employees key={employees.id} jobtitle={employees.jobtitle} salary={employees.salary} id={employees.id}/>
    })}
    {todo.map(todo=>{
      return <Todo  key={todo.title} title={todo.title} desc={todo.desc}/>
    })}

    {/* 1st syntax for conditional rendering */}
    {showbtn?<button>I am true</button>:<button>I am false</button>}
    <button onClick={()=>{setshowbtn(!showbtn)}}>Toggle button</button>
        {/* 2nd syntax for conditional rendering */}
        {showbtn1 && <button>I am opened</button>}
    <button  onClick={()=>{setshowbtn1(!showbtn1)}} > {showbtn1 ? 'Hide button1' : 'Open button1'}</button>
    




    </>
  )
}

export default App
