import React from 'react'
import logoLP from '../Logo/logo-web-transparent.png'
import './LandingPage.css'
import LpCommunityBox from './Lp_CommunityBox'

function LandingPage () {
  return (
    <div className='landingPage'>
      <div className='logo-div'>
        <img src={logoLP} className='logoLP' />
      </div>
      <div>
        <LpCommunityBox />
      </div>
    </div>
  )
}

export default LandingPage
