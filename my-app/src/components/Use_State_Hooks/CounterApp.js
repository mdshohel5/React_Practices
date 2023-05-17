import React, { useState } from 'react'

import './CounterApp.css'
const CounterApp = () => {
    const [count, setCount] = useState(0)

    const handleIncrementClicked = () =>{
        setCount(count + 1)

    }
    const handleDecrementClicked = () =>{
        setCount(count - 1)
    }

    const handleResetClicked = () =>{
        let upDatecount = 0;
        setCount(upDatecount)
    }
  return (
    <>
     <div className='myCounterAppSection'>
        <h1 className='myCounter'>My Counter App</h1>
            <div className='countSection'>
                <h2 className='count'>Count : {count}</h2>
                <div className='countBtn'>
                    <button className='btnIncrement' onClick={handleIncrementClicked} disabled={count === 10 ? true : false}>Increment</button>
                    <button className='btnDecrement' onClick={handleDecrementClicked} disabled={count === 0 ? true : false}>Decrement</button>
                    <button className='btnReset' onClick={handleResetClicked}>Reset</button>
                </div>
            </div>
     </div>
    </>
  )
}

export default CounterApp