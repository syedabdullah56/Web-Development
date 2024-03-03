import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';

function App() {
  const [value,setValue]=useState(0);
  const [value1,setValue1]=useState(0);
  // the variable which we can use in our dom and can change it is called as state
  return (
    <div className="App">
         <Navbar/>
         <div className="counter">{value}</div>
         <div className="counter">{value1}</div>
         <button onClick={()=>{setValue(value+1)}}>Click Me</button>
         <button onClick={()=>{setValue1(value1+1)}}>Increment</button>
         <button onClick={()=>{setValue1(value1-1)}}>Decrement</button>

       
     
    </div>
  );
}

export default App;
