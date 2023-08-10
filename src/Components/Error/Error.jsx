import React from 'react'
import './Error.css'
import error404 from '../../assets/error.png'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <center className='error'>
        

        <img src={error404} alt="" />
        <h1>City Not found !!!</h1>
        <h4>Please Enter valid city</h4>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <div className='err-btn'>
                Go Back
            </div>
        </Link>
        
    </center>
  )
}

export default Error