import React from 'react'
import './Cont.scss'
import contact from '../../images/animal contact.jpg'
function Contbox() {
  return (
    <>
     <div class="animal-contact">
      
      <h1>01.</h1>
      <div>
          <h2>Animal Contact</h2>
          <p>There is no evidence that animals play a significant role in spreading SARS-CoV-2,
             the virus that causes COVID-19, to people. There have been a few reports of
              infected mammalian animals spreading the virus to people during close contact, but this 
              is rare</p>
              </div>
      
      <img src={contact} className="animal" alt=""/>
    
   </div>
   <button class="btnbtn">Report a case</button>
   <div class="personal-contact"></div>
    </>
  )
}

export default Contbox