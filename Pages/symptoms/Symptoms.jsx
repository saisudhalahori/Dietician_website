import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Fotter from '../../Components/Footer/Footer'
import Prevent from '../../Components/Prevent/Prevent'
import symtom from '../../images/symptoms covid19.png'
import Contbox from '../../Components/Contegion/Contbox'
import Contegionbox from '../../Components/Contegion/ContegionBox'
import Heilight from '../../Components/highlight/Highlight'
import './Symptoms.scss'
function Symtoms() {
  return (
    <div>
     <Navbar />
     <div className='symtoms'>
     <Prevent
      img={symtom}
    
      />
      <Contbox />
      <Contegionbox />
      <Contbox />
      <Contegionbox />
      <Heilight 
      help={"asd"}
      />
     </div>
     
     <Fotter />
    </div>
  )
}

export default Symtoms