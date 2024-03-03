import React from 'react'
import "./Card.css"
import myImage from "./abdullah.png"

const Card = (props) => {
  return (
    <div>
        <div className="card" >
             {/* <img src={myImage} alt="HI" width={333} /> */}
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default Card