import React, { Component } from 'react'
import { connect } from 'react-redux'
import LandingPagePitchBox from './LandingPagePitchBox'
import FormContainer from './FormContainer'
import Modal from '../shared/Modal'
import logoLP from '../../asset/logo/logo.svg'
import './LandingPage.css'

const mapStateToProps = state => ({
  user: state.user
})

class LandingPage extends Component {
  state = {
    content:
      [
        { title: 'Groupe', text: 'Crée des groupes, invite tous tes amis, et relevez des défis pour voir qui sera le meilleur.' },
        { title: 'Battle', text: 'Invite les membres de ton groupe et affrontez-vous dans des battles plus créatives les unes que les autres!' },
        { title: 'Photo', text: 'Poste ta plus belle photo en fonction du thème pour remporter la victoire!' }
      ],
    contentMobile:
      [
        { title: 'À toi de Jouer!', text: 'Invite tous tes amis dans des groupes! Crée des battles et poste la photo la plus créative pour voir qui sera le vainqueur!' }
      ],
    isOpen: false
  }

  handleOpenModal = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleClickButton = () => {
    const { user, history } = this.props
    if (user) {
      history.push(`/${user.username}`)
    } else {
      this.handleOpenModal()
    }
  }

  render () {
    return (
      <div className='landingPage'>
        <div className='logo-div'>
          <img src={logoLP} className='logoLP' alt='Pix Battle Logo' />
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
            className='box-landing'
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
        <button
          type='button'
          className='pitch-button'
          onClick={this.handleClickButton}
        >
          JOUER
        </button>
        <Modal isOpen={this.state.isOpen} showLogo>
          <FormContainer onClose={this.handleOpenModal} />
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps)(LandingPage)
