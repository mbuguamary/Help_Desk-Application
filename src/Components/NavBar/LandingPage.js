import React from 'react'
import './Landing.css'
import { Link, NavLink, Outlet } from 'react-router-dom';
import SignUp from '../Authentication/SignUp';
import Login from '../Authentication/Login';
const LandingPage = () => {
  return (
    <div className='page'>
    <div className='nav'>
    <nav>
    <NavLink style={{
          padding: '0 24px 24px', float: 'Left'
        }} >Metro Help Desk</NavLink>
      <NavLink to="/DashBoard" style={{
          padding: '0 24px 24px',float: 'right'
        }}>Contact Us</NavLink>
      
      
      <NavLink to="/Login" style={{
          padding: '0 24px 24px', float: 'right'
        }}>Login</NavLink> 
    </nav>
    </div>
    <div className='color'>
    <div className='center'>
        <h2>Welcome to Metro Help desk</h2>
        <h2>How can we help you?</h2>
        </div>
        <div className='buttons'>
        <h3 className='signin'>Sign in for expedited support</h3>
        <Link to="/SignUp">
        <button className='button'>Sign In</button>
        </Link>
        <Link to ="/Login">
        <button className='button'>Sign up</button>
        </Link>
    </div>
    <div>
    <h3>Our Products</h3> 
    </div>
    <div>
       <div className='tasks'>
      <div className='ticket'>
       <h4>Software Development</h4> 
        
      </div>
      <div className='ticket'>
        <h4>Networking $ Maintenance</h4>
       
        </div>
      <div className='ticket'>
      <h4>CCTV Installations</h4>
      
        </div>
      <div className='ticket'>
        <h4>Hardware support</h4>
        </div>
    </div>
    </div>
    </div>
    <div>
        <footer>
            <h4>Contact us at 071000000</h4>
            <h4>Always ready to serve you</h4>
        </footer>
    </div>
    </div>
  )
}

export default LandingPage