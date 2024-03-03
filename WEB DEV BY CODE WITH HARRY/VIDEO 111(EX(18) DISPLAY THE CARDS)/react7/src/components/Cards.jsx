import React from 'react'
import "./Cards.css"
const Cards = (props) => {
  return (
    <div>
      <p>{props.userid}</p>
      <p>{props.id}</p>
      <p>{props.title}</p>
      <p>{props.body}</p>
      
    </div>
  )
}

export default Cards
