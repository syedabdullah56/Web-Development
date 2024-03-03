import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed. */}
    
    {/* Hook Rules */}
{/* There are 3 rules for hooks: */}
{/* Hooks can only be called inside React function components. */}
{/* Hooks can only be called at the top level of a component. */}
{/* Hooks cannot be conditional */}
     <div className="count">The count is {count}</div>
     <button onClick={()=>{setCount(count+1)}}>Update Count</button>
    </>
  )
}

export default App
