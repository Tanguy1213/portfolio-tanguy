import React from 'react'
import "./SliderCard.scss"

function SliderCard(props) {
  return (
    <div className='card-container'>
        <h3>{props.title}</h3>
        <img src={props.src} alt={props.alt}></img>
    </div>
  )
}

export default SliderCard