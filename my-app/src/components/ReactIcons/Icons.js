import React from 'react'

import styles from './Icons.css'

import { FaBeer, FaFacebook,FaGoogle, FaInstagram, FaMicrosoft } from 'react-icons/fa';
const Icons = () => {
  return (
    <>
     <div className='icons'>
        <h1 className='iconsHeading'>React Icons</h1>
        <div className='icon'>
        <FaFacebook />
        <FaBeer></FaBeer>
        <FaGoogle></FaGoogle>
        <FaInstagram></FaInstagram>
        <FaMicrosoft></FaMicrosoft>
        
         
        </div>
     </div>
    </>
  )
}

export default Icons