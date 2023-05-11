import React from 'react'
import styles from './Card.css'
const Card = (props) => {
    const {cardImg, cardTitle, cardDesc} = props;
  return (
    <div className='card'>
        <div className='img'>
           <img src={cardImg} alt="jpg"></img>
        </div>

       <div className='cardTitle'>
          {cardTitle}
       </div>
       <div className='cardDesc'>
          {cardDesc}
       </div>
    </div>
  )
}

export default Card