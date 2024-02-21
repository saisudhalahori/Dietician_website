import React from 'react'
import './ContegionBox.scss'
import stock from '../../images/istockphoto-1366654397-1024x1024.jpg'
import Contbox from './Contbox'
function Contegionbox() {
  return (
    <>
    
    <div className="subcontainer">
        <div className="image-container">
            <img src={stock} alt=""/>
        </div>
        <div className="subcontainer-details">
             <p className="paragraph">HOW COVID-19 SPREAD</p>
             <h1 className="contagion-container">Contagion</h1>
             <p className="paragraph2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex officiis perspiciatis quod optio, voluptatibus eos dignissimos incidunt praesentium porro.</p>
             <div className="sub-heading-container">
                <div>
                 <ul>
                    <li>Animal Contact</li>
                    <li>Personal Contact</li>
                 </ul>
                </div>
                <div>
                    <li>Air Transmission</li>
                    <li>Contaminate Object</li>
                </div>
             </div>
            </div>
         
      </div>
      
      </>
  )
}

export default Contegionbox