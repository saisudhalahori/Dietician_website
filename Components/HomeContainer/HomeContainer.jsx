import React from 'react'
import './HomeContainer.scss'
import drphoto from '../../images/diatian image2.jpg'
import Heighlite from '../highlight/Highlight'
import Aboutus from '../about/About'
import Protect from '../protect/Protect'
import { useNavigate } from 'react-router-dom'
function HomeContainer() {
  const navigat = useNavigate()
  return (
  <div className='container'>  
    <div className='main'>
        <div className="container-list">
              <h1>we can provide<br/> specialized dietitian <br/>services</h1>
              <br/>
           <ul>
            <li>Long-term Care</li>
            <li>Acute Care Hospitals</li>
            <li>Dialysis Centers</li>
            <li>Outpatient Clinics</li>
            <li>Diabetes Education</li>
          </ul>
        <div className="Appointment">
            <button className="btn" onClick={()=>navigat('/getappointment')}>Get Appointment</button>
            <p>888851257115</p>
        </div>
        
       </div>
       <div className="image-container">
        <img src={drphoto} alt=""/>
        
       </div>   
        

    </div>
    <Heighlite 
    counter={10}
    
    /> 
      <Aboutus />
    <Protect /> 
    </div>  
  )
}

export default HomeContainer