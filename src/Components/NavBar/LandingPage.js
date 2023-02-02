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
    <NavLink className='navlink' style={{
          padding: '10px 24px 24px', float: 'Left' 
        }} >Metro Help Desk</NavLink>
        
         {/* <NavLink style={{
          padding: '10px 24px 24px',float: 'right'
        }} ><Link to="/AddTicketForm">
        <button className='button3'>Raise Ticket</button>
        </Link></NavLink>
        
         <NavLink style={{
          padding: '10px 24px 24px',float: 'right' 
        }}><Link to="/SignUp">
        <button className='button1'>Sign In</button>
        </Link></NavLink>  */}
        
       
      <NavLink className='navlink' to="/Login" style={{
          padding: '10px 24px 24px',float: 'right'
        }}>Login</NavLink>
          <NavLink className='navlink' to="/SignUp" style={{
          padding: '10px 24px 24px',float: 'right'
        }}>Sign In</NavLink>
      <NavLink className='navlink' to="/AddTicketForm" style={{
          padding: '10px 24px 24px',float: 'right'
        }}>Raise Ticket</NavLink>
        
     
    </nav>
    </div>
    <div className='color'>
    <div className='center'>
        <h2>Welcome to Metro Help Desk</h2>
        <h2>How can we help you?</h2>
        <h4 className='signin'>Sign in for expedited support</h4>
        </div>
        
    <div className='products'>
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
            <h4 className='footer'>Contact us at 071000000</h4>
            <h4 className='footer1' >Always ready to serve you</h4>
        </footer>
    </div>
    </div>
  )
}

export default LandingPage