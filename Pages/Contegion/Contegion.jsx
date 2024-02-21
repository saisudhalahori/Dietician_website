import React from 'react'
import './Contegion.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Fotter from '../../Components/Footer/Footer'
import Contegionbox from '../../Components/Contegion/ContegionBox'
import Heighlite from '../../Components/highlight/Highlight'
import Contbox from '../../Components/Contegion/Contbox'
function Contegion() {
  return (
    <div className='condesion'>
     <Navbar />
     <Contegionbox 
        
        />
        <Contbox />
        <Contbox />
        <Contbox /> 
        <Heighlite 
        help={"akjdsn"}
        />

        <Fotter />
    </div>
  )
}

export default Contegion