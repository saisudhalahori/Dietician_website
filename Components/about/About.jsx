import React from 'react'
import './About.scss'
import drabout from '../../images/diatian image.jpg'

function Aboutus() {
  return (
    <div className="about-us-container">
        <div className="about-us-image">
        <img src={drabout} alt=""/>
        </div>
        <div className="about-us-heading">
            <h1>About Us</h1>
           
        <p>Nutrition Consultants is a nationwide group of Registered Dietitians who provide professional nutrition consulting services.

            We specialize in providing Dietitian Consultant services in a wide variety of healthcare and wellness organizations.</p>
     <p>To be the most trusted and respected nutrition professional services firm recognized by our clients for delivering excellence</p>
     <button className="check btn">Check Symptoms</button>
        </div>
        

    </div>
  )
}

export default Aboutus;