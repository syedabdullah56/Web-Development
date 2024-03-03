import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let a = useRef(0)
  // useEffect(() => {
  //   a.current=a.current+1
  //    console.log(`Rerendering and the value of a is ${a.current}`)
  // })
  const ref = useRef(0)
  useEffect(() => {
     console.log(`First Rendering..`)
     ref.current.style.backgroundColor="red";
  },[])

  return (
    <>
     <div>{count}</div>
     <button ref={ref} onClick={()=>{setCount(count+1)}}>Click Me</button>
     <button onClick={()=>{ref.current.style.display="none"}}>Remove counter</button>
    </>
  )
}

export default App
