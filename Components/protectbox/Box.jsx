import React from 'react'
import './Box.scss'

function Box({img,title,pera}) {
  return (
           <div className='box'>
        
            <img src={img} alt=''/>
            <h3>{title}</h3>
            <p>{pera}</p>
            <button class="btn">learn more</button>


        </div>
  )
}

export default Box