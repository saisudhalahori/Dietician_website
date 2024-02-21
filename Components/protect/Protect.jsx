import React from 'react'
import './Protect.scss'
import Box from '../protectbox/Box'
import homestay from '../../images/covid19-prevention-stay-home.svg';
import sneez from '../../images/sneezes.svg';
import mask from '../../images/mask.svg';
import clean from '../../images/clean.svg'

function Protect() {
  return (
   <>
   
    <div class="Prevention-container">
    <h1>Take steps to protect yourself</h1>
    <p>In those situations, use as many prevention strategies as you can, such as practicing hand hygiene, consistently and correctly wearing a high-quality mask, improving ventilation, and keeping your distance, when possible, from the person who is sick or who tested positive.</p>
    </div>

    <div className='prevention-steps'>
         <Box
         img={homestay}
         title="Stay at home"
         pera="Nisl, dictum eros lectus fringilla enim quis et malesuada hendrerit arcu, mauris massa penatibus augue sed."

         />
         <Box
         img={sneez}
         title="Cover caugh & sneezes"
         pera='Covering coughs and sneezes and keeping hands clean can help prevent the spread of serious influenza, and COVID-19.'

         />
         <Box
         img={mask}
         title="Wear a facemask"
         pera="Make sure the mask fits to cover your nose, mouth and chin. If you adjust the mask to cover those areas, wash your hands before and after.

         "

         />
         <Box 
         img={clean}
         title="Clean & disinfectant"
         pera="Cleaning alone removes most types of harmful germs Disinfecting can kill harmful germs from surfaces. Sanitizing"

         />
    </div>

    </>
  )
}

export default Protect