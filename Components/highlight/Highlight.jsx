import React from 'react'
import './Highlite.scss'
import covid from '../../images/covid-19-cta-img-1.png'
function Heighlite({counter , help}) {
  
  return (
    <div className='experience-container'>

       { counter && <>   <div className='counter'>
            <h1>{counter}</h1>
            <p>YEARS EXPERIENCE
            </p>
          </div>
        <div className='counter'>
            <h1>10000</h1>
            <p>SATISFIED CUSTOMER

            </p>
        </div> </>}


     {help && <>
     
    
<div className="left">
<h4>NEED HELP?</h4>
<h2>We are here to help</h2>
<p>Vitae, vulputate lorem id egestas neque egestas habitant sit ante nec.</p>
<button className="contactus btn">Contact Us Now</button>
</div>
<div className="right">
    <img src={covid} alt="" />
</div>



     </>}
    </div>

    
  )
}

export default Heighlite