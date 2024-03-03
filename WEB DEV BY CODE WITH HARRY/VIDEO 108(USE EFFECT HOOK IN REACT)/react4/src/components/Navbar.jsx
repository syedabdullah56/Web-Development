import React from 'react'
import { useEffect } from 'react'

const Navbar = (props) => {
    useEffect(() => {
        alert("Color is changed");
    }, [props.color])
    //Case 1: Run on every render
 useEffect(() => {
  alert("Hey I will run on every render")
  return()=>{
    alert("Compoent navbar is unmounted")
  }
})
//  CASE 2:RUN ONLY ON FIRST RENDER
useEffect(() => {
 alert("Hey I will run on only first render")
}, [])
// // CASE 3:RUN ONLY WHEN CERTAIN VALUE IS CHANGED
// useEffect(() => {
//  alert("I will run when count is changed")
// }, [count])
  return (
    <div>
      HI I AM {props.color} color
    </div>
  )
}

export default Navbar
