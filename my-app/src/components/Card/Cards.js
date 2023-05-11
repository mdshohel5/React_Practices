import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div>
       
        {/* Value passing  */}

        <Card cardTitle="First Card" cardDesc="This is First Card Component"></Card>    
        <Card cardTitle="Second Card" cardDesc="This is Second Card Component"></Card>
        <Card cardTitle="Third Card" cardDesc="This is First Card Component"></Card>
        <Card cardTitle="Fourth Card" cardDesc="This is Fourth Card Component"></Card>
        <Card cardTitle="Five Card" cardDesc="This is Five Card Component"></Card>
    </div>
  )
}

export default Cards