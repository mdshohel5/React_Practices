import React from 'react'
import styles from './List.css'

import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id:uuidv4(),
        title:"This is one",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
        id:uuidv4(),
        title:"This is two",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
        id:uuidv4(),
        title:"This is three",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
        id:uuidv4(),
        title:"This is four",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
]

const List = () => {
    console.log(todos)
    console.log(uuidv4());
  return (
    <>
     <h1>Good Morning</h1>

     {todos.map((todo)=> {
        const {title, desc, id} = todo;
        return <div className='listCard' key={id}>
            <h3 className='title'>{title}</h3>
            <p className='desc'>{desc}</p>
        </div>
      
     })}
    </>
  )
}

export default List