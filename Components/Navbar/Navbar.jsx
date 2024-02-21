import React, { useEffect } from 'react'
import './Navbar.scss'
import icon from '../../images/diatitianlogo.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import Appointmentstatus from '../AppointmentStatus/appointmentstatus';

function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

const navigate = useNavigate()   


  return (
    <div className='navbar'>
        <img src={icon} alt=''  />
        
        <ul>
            <li><NavLink to="/" className="NavLink">Home</NavLink></li>
            <li><NavLink to="/contegion" className="NavLink">Contagion</NavLink> </li>
            <li><NavLink to="/symtoms" className="NavLink">Symptoms</NavLink></li>
            <li><NavLink to="/prevention" className="NavLink">Prevention</NavLink></li>
            <li><NavLink to="/contact" className="NavLink">Contact Us</NavLink></li>

            {isAuthenticated && (
                  <li>
                <p>
                  {user.name}
                </p>
                </li>)}

            {
              isAuthenticated ?  <li>  <button className='btnbtn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button></li> : (
              <li><button className='btnbtn' onClick={() => loginWithRedirect()}>Log In</button></li>
            )
            }
            
          
            
        </ul>
        <button onClick={()=>navigate('/appointmentStatus')}>Appointment Status</button>
    </div>
  )
}

export default Navbar