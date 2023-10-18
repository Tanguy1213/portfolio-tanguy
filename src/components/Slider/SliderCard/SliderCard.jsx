import React from 'react'
import "./SliderCard.scss"

function SliderCard(props) {
  return (
    <div className='card-container'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
    </div>
  )
}

export default SliderCard