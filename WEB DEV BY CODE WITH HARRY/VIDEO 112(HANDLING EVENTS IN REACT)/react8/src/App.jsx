import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const [name, setname] = useState("Abdullah")
  // const [form, setform] = useState({email:" ",phone:" "})
  const [form, setform] = useState({email:"",phone:""})
 const  handlebutton=()=>{
    alert("Button is clicked")
  }
  const  handlemouse=()=>{
    alert("You have hover")
  }

  const  handlechange=(e)=>{
    setname(e.target.value)
  }

  
  const  handleform=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
    console.log(form)
  }


  return (
    <>
      <div className="button">
        <button onClick={handlebutton}>Click Me</button>
      </div>
      <div className="button1">
        <button onMouseOver={handlemouse}>Hover me </button>
      </div>
      <input type="text" value={name} onChange={handlechange} />
      <input type="text"name="email" value={form.email} onChange={handleform} />
      <input type="text" name="phone" value={form.phone} onChange={handleform} />
      {/* <input type="text" name='email' value={form.email} onChange={handleform} />
      <input type="text" name='phone' value={form.phone} onChange={handleform} /> */}
    </>
  )
}

export default App
