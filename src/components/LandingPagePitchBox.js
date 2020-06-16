import React from 'react'
import './LandingPagePitchBox.css'

const LandingPagePitchBox = (props) => {
  return (
    <div>
      <div className='div-pitchBox'>
        <div className='pitchBoxLandingPage'>
          <div className='pitchBoxLandingPage-text'>
            <h2 className='pitch-h2'>
              {props.title}
            </h2>
            <p className='pitch-p'>
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPagePitchBox
