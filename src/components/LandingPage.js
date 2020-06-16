import React, { Component } from 'react'
import LandingPagePitchBoxDesktop1 from './LandingPagePitchBoxDesktop1'
// import LandingPagePitchBoxMobile from './LandingPagePitchBoxMobile'
import logoLP from '../Logo/logo.svg'
import './LandingPage.css'

class LandingPage extends Component {
  // state = {
  //   title1: 'Groupe',
  //   content1: 'Crée des groupes, invite tous tes amis, et relevez des défis pour voir qui sera le meilleur.',
  //   title2: 'Battle',
  //   content2: 'Invite les membres de ton groupe et affrontez vous dans des battles plus créatives les unes que les autres!',
  //   title3: 'Photo',
  //   content3: 'Poste ta plus belle photo en fonction du thème pour remporter la victoire!',
  // }

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

  componentDidMount () {
    console.log(window.innerWidth)
  }

  render () {
    return (
      <div className='landingPage'>
        <div className='logo-div'>
          <img src={logoLP} className='logoLP' />
        </div>
        <div className='mobile'>
          <div className='box-landing'>
            <LandingPagePitchBoxDesktop1
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
                <LandingPagePitchBoxDesktop1
                  title={c.title}
                  text={c.text}
                  key={i}
                />
              ))
            }
          </div>
        </div>
        <button className='pitch-button-Desktop1'>
          Jouer
        </button>
      </div>
    )
  }
}

export default LandingPage
