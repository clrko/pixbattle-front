import React from 'react'
import LandingPagePitchBoxMobile from './LandingPagePitchBoxMobile'
import LandingPagePitchBoxDesktop1 from './LandingPagePitchBoxDesktop1'
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
      <div>
        <LandingPagePitchBoxDesktop1 />
      </div>
    </div>
  )
}

export default LandingPage
