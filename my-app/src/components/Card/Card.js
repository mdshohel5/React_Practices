import React from 'react'

import styles from './Card.css'

// const todoTitle = "Card Family";
// const todoDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
const date = new Date()
const dateName = date.getDate()
const monthName = date.getMonth()
const currentYear = date.getFullYear()

const Card = (props) => {
    const {cardTitle, cardDesc} = props
  return (
    <div className='card'>
        <h3 className="cardTitle">{cardTitle}</h3>
        <p className='cardDesc'>{cardDesc}</p>
        <p className='cardFooter'>{dateName + "/" + monthName + "/" + currentYear}</p>
    </div>

  )
}

export default Card