import React, { Component } from 'react'

import './input.css'

export default class InputForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         fName:'',
         mName:'',
         pAddress:'',
         perAddress:'',
         email:'',
         password:''
      }
    }
 

  render() {
    const handleNameChange = (e) =>{
        this.setState({
            name:e.target.value
        }, ()=>{
            console.log(e.target.value)
        })

    }

    const handleFatherChange = (e) =>{
        this.setState({
            fName:e.target.value
        }, ()=>{
            console.log(e.target.value)
        })

    }

    const handleMotherChange = (e) =>{
        this.setState({
            mName:e.target.value
        }, ()=>{
            console.log(e.target.value)
        })

    }

    const handlePaddressChange = (e) =>{
        this.setState({
            pAddress:e.target.value
        }, ()=>{
            console.log(e.target.value)
        })

    }

    const handlePerAddressChange = (e) =>{
        this.setState({
            perAddress:e.target.value
        }, ()=>{
            console.log(e.target.value)
        })

    }

    const handleEmailChange = (e) =>{
        this.setState({
            email:e.target.value
        }, ()=>{
            console.log(e.target.value)
        })

    }

    const handlePasswordChange = (e) =>{
        this.setState({
            password:e.target.value
        }, ()=>{
            console.log(e.target.value)
        })

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const {name, fName, mName, pAddress, perAddress, email, password} = this.state
        let userInfo = {
            name,
            fName,
            mName,
            pAddress,
            perAddress,
            email,
            password
        
        }
        console.log(userInfo)

    }
    return (
      <>
       <div className='formSection'>
        <h1 className='title'>Registration Form</h1>
         <form onSubmit={handleSubmit}>
                <div className='inputData'>
                    <label>Your Name : </label>
                    <input className="inputField" type='text' onChange={handleNameChange} value={this.name}></input>
                </div>
                <div className='inputData'>
                    <label>Your Father Name : </label>
                    <input className="inputField" type='text' onChange={handleFatherChange} value={this.fName}></input>
                </div>
                <div className='inputData'>
                    <label>Your Mother Name : </label>
                    <input className="inputField" type='text' onChange={handleMotherChange} value={this.mName}></input>
                </div>
                <div className='inputData'>
                    <label>Your Present Address : </label>
                    <input className="inputField" type='text' onChange={handlePaddressChange} value={this.pAddress}></input>
                </div>
                <div className='inputData'>
                    <label>Your Permanent Address : </label>
                    <input className="inputField" type='text' onChange={handlePerAddressChange} value={this.perAddress}></input>
                </div>
                <div className='inputData'>
                    <label>Your Email: </label>
                    <input className="inputField" type='email' onChange={handleEmailChange} value={this.email}></input>
                </div>
                <div className='inputData'>
                    <label>Your Password: </label>
                    <input className="inputField" type='password' onChange={handlePasswordChange} value={this.pass
                    }></input>
                </div>

                <div className='submitBtn'>
                    <button type='submit'>
                        Submit
                    </button>
                </div>
         </form>
       </div>


{/* 
       Show Data */}

       {/* <p>Your Name : {this.state.name}</p>
       <p>Your Father Name : {this.state.fName}</p>
       <p>Your Mother Name : {this.state.mName}</p>
       <p>Your Present Address : {this.state.pAddress}</p>
       <p>Your Permanent Address : {this.state.perAddress}</p>
       <p>Your E-mail: {this.state.email}</p>
       <p>Your Password : {this.state.password}</p> */}
      </>
    )
  }
}
