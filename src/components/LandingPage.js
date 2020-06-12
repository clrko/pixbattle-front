import React, { Component } from 'react'
import LandingPagePitchBoxDesktop1 from './LandingPagePitchBoxDesktop1'
import LandingPagePitchBoxMobile from './LandingPagePitchBoxMobile'
import logoLP from '../Logo/logo-web-transparent.png'
import './LandingPage.css'

class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title1: 'Groupe',
      content1: 'Crée des groupes, invite tous tes amis, et relevez des défis pour voir qui sera le meilleur.',
      title2: 'Battle',
      content2: 'Invite les membres de ton groupe et affrontez vous dans des battles plus créatives les unes que les autres!',
      title3: 'Photo',
      content3: 'Poste ta plus belle photo en fonction du thème pour remporter la victoire!'
    }
  }

  render () {
    return (
      <div className='landingPage'>
        <div className='logo-div'>
          <img src={logoLP} className='logoLP' />
        </div>
        <div>
          <LandingPagePitchBoxMobile className='LandingPagePitchBoxMobile' />
        </div>
        <div className='box-landing'>
          <LandingPagePitchBoxDesktop1 title={this.state.title1} content={this.state.content1} />
          <LandingPagePitchBoxDesktop1 title={this.state.title2} content={this.state.content2} />
          <LandingPagePitchBoxDesktop1 title={this.state.title3} content={this.state.content3} />
        </div>
        <button className='pitch-button-Desktop1'>
          Jouer
        </button>
      </div>
    )
  }
}

export default LandingPage
