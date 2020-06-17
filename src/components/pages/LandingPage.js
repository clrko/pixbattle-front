import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import LandingPagePitchBox from './LandingPagePitchBox'
import logoLP from '../../Logo/logo.svg'
import './LandingPage.css'

class LandingPage extends Component {
  state = {
    content:
      [
        { title: 'Groupe', text: 'Crée des groupes, invite tous tes amis, et relevez des défis pour voir qui sera le meilleur.' },
        { title: 'Battle', text: 'Invite les membres de ton groupe et affrontez vous dans des battles plus créatives les unes que les autres!' },
        { title: 'Photo', text: 'Poste ta plus belle photo en fonction du thème pour remporter la victoire!' }
      ],
    contentMobile:
      [
        { title: 'A toi de Jouer!', text: 'Invite tous tes amis dans des groupes! Crée des battles et poste la photo la plus créative pour voir qui sera le vainqueur!' }
      ]
  }

  render () {
    return (
      <div className='landingPage'>
        <div className='logo-div'>
          <img src={logoLP} className='logoLP' />
        </div>
        <div className='mobile'>
          <div className='box-landing'>
            <LandingPagePitchBox
              title={this.state.contentMobile[0].title}
              text={this.state.contentMobile[0].text}
            />
          </div>
        </div>
        <div className='desktop'>
          <div
            classname='box-landing'
            style={{
              display: 'flex',
              maxWidth: '100%',
              justifyContent: 'spaceAround'
            }}
          >
            {
              this.state.content.map((c, i) => (
                <LandingPagePitchBox
                  title={c.title}
                  text={c.text}
                  key={i}
                />
              ))
            }
          </div>
        </div>
        <NavLink to='/LoginRegistration'>
          <button className='pitch-button'>
          Jouer
          </button>
        </NavLink>
      </div>
    )
  }
}

export default LandingPage
