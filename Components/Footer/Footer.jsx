import React from 'react'
import './Footer.scss'
import logo from '../../images/diatitianlogo.jpg'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className="footer-container2">
    <div className="basic-details">
     <img src={logo} alt=""/>
     <ul className="socialmedia-icons">
        <li>Copyright©2024me|</li>
        <li>Powered by me</li>
       <ul id="icons">
        <li><FacebookIcon /></li>
        <li><TwitterIcon /></li>
        <li><InstagramIcon /></li>
        <li><YouTubeIcon /></li>
       </ul>
     </ul>
     
    </div>
    <div className="quick-link">
        <h3>Quick-link</h3>
      <ul>
        <li>Home</li>
        <li>Contagion</li>
        <li>Symptoms</li>
        <li>Prevention</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className="resources">
        <h3>Resource</h3>
        <ul>
            <li>WHO Information</li>
            <li>COVID-19 Wikipedia</li>
            <li>Latest Updates</li>
            <li>Worldometer Info</li>
        </ul>
    </div>
    <div className="contact-info">
        <h3>Contact-Info</h3>
            <ul>
                <li><FmdGoodIcon /> 123, Vijaynagar, Indore India</li>
                <li><SettingsPhoneIcon /> 12345678</li>
                <li><MailOutlineIcon /> test@mail.com</li>
               </ul>
      </div>
 </div>
  )
}

export default Footer