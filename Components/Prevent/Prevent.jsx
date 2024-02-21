import React from 'react'
import './Prevent.scss'

function Prevent({img,head4,head1}) {
  return (
    <div className="prevention-img">
      <div>
        <img src={img} alt='' />
      </div>
      { head1 &&
      <div>
        <h4 className="heading-h4">{head4}</h4>

        <h1>{head1}</h1>
      </div>  }
    </div>
  )
}

export default Prevent