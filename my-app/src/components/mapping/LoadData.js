import React from 'react'
import data from './data.json'
import Card from './Card'

const LoadData = () => {
    console.log(data)
  return (
    <div>
        <>
         {/* <Card></Card> */}
         {data.map((items, index) => <Card key={index}
         cardImg={items.flag} 
         cardTitle={items.title} 
         cardDesc={items.desc}> 
         </Card>)}
        
        </>
    </div>
  )
}

export default LoadData