import React from 'react'
import './LandingPagePitchBoxDesktop1.css'

const LandingPagePitchBoxDesktop1 = (props) => {
  return (
    <div>
      <div className='div-pitchBoxDesktop1'>
        <div className='pitchBoxLandingPageDesktop1'>
          <div className='pitchBoxLandingPage-text-Desktop1'>
            <h2 className='pitch-h2-Desktop1'>
              {props.title}
            </h2>
            <p className='pitch-p-Desktop1'>
              {props.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPagePitchBoxDesktop1
