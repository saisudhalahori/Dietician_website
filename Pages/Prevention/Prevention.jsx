import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Fotter from '../../Components/Footer/Footer'
import Prevent from '../../Components/Prevent/Prevent'
import symtom from '../../images/symptoms covid19.png'
import Contbox from '../../Components/Contegion/Contbox'
import Contegionbox from '../../Components/Contegion/ContegionBox'
import Heilight from '../../Components/highlight/Highlight'
import prevent from '../../images/preventionpage image.jpg'
function Prevension() {
  return (
    <div className='home'>
      <Navbar />
        <Prevent 
        img={prevent}
        head4="COVID-19 PREVENTION"
        head1="Take steps to protect yourself"
        />
        <Contegionbox />
        <Contbox />
        <Contegionbox />
        <Contbox />
        <Heilight 
        help={"jabsd"}
        />
         
        <Fotter />
      
      
    </div>
  )
}

export default Prevension