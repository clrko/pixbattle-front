import React from 'react'
import LandingPagePitchBoxMobile from './LandingPagePitchBoxMobile'
import logoLP from '../Logo/logo-web-transparent.png'
import './LandingPage.css'

function LandingPage () {
  return (
    <div className='landingPage'>
      <div className='logo-div'>
        <img src={logoLP} className='logoLP' />
      </div>
      <div>
        <LandingPagePitchBoxMobile className='LandingPagePitchBoxMobile' />
      </div>
    </div>
  )
}

export default LandingPage
