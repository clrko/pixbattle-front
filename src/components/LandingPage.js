import React from 'react'
import logoLP from '../Logo/logo-web-transparent.png'
import './LandingPage.css'
import LandingPagePitchBox from './LandingPagePitchBox'

function LandingPage () {
  return (
    <div className='landingPage'>
      <div className='logo-div'>
        <img src={logoLP} className='logoLP' />
      </div>
      <div>
        <LandingPagePitchBox />
      </div>
    </div>
  )
}

export default LandingPage
