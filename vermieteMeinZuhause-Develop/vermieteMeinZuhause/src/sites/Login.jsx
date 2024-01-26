import React from 'react'
import Loginbox from '../components/Loginbox'
import { Link } from 'react-router-dom'
import '../css/Login.css'

const Login = () => {
  
  return (
    <div className='login'>
       <Loginbox /> 
        <div className='signInSuggestion'>
            <h1>Do you want to create a new account?</h1>
            <p></p>
            <Link to="/register" className='RegisterLinkInLogin'>Register</Link>
        </div>
    </div>
  )
}

export default Login