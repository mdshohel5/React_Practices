import React, { Component } from 'react'

import './ClassCounter.css'


export default class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
  render() {

    const count = this.state.count

    const handleClickIncrement = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
    const handleClickDecrement = () =>{
        this.setState({
            count : this.state.count - 1
        })
    }

    return (
      <>
        <div className='counterApp'>
        <div>
            <h1 className='showCounter'>Counter App : {count}</h1>
        </div>
        <div className='classBtn'>
            <button className='myButton' onClick={handleClickIncrement} disabled={count===10? true: false}>+</button>
            <button className='myButton' onClick={handleClickDecrement} disabled={count===0 ? true: false}>-</button>
        </div>
        </div>
      </>
    )
  }
}
