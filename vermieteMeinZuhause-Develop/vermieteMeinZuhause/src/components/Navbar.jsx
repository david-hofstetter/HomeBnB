import React, { useState } from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {

  const userToken = sessionStorage.getItem('token')

  return (
    <div className='Navbar-Container'>
        <nav className='navItems'>
          <div>
            
            <ul id='nav-ul'>
              <li id="LogoName">FakeBnB</li>
              <li>
                <Link to="/" className='nav-links'>Start</Link>
              </li>
              <li>
                <Link to="/rent" className='nav-links'>For Rent</Link>
              </li>
              <li>
                <Link to="/about" className='nav-links'>About</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className='navProfile'>
              {!userToken ? (
                <div>
                  <button className='loginbutton'>
                    <Link to="/login" className='nav-buttons'>Login</Link>
                  </button>
                  <button className='signbutton'>
                    <Link to="/signIn" className='nav-buttons'>Sign In</Link>
                  </button>
                </div>
              ):(
                <div>
                  <button className='accountButton'>
                    <VscAccount style={{fontSize: 24}}/>
                  </button>
                </div>
              )}

              
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navbar