import React, { Component } from 'react'
import FormContainer from './FormContainer'
import Modal from '../shared/Modal'
import logoLP from '../../asset/logo/logo.svg'
import './LandingPage.css'

class LandingPage extends Component {
  state = {
    isOpen: false
  }

  handleOpenModal = e => {
    e.preventDefault()
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <div className='landingPage'>
        <div className='logo-div'>
          <img src={logoLP} className='logoLP' alt='Pix Battle Logo' />
        </div>
        <button className='landing-join-button' onClick={this.handleOpenModal}>
          REJOINDRE
        </button>
        <Modal isOpen={this.state.isOpen}>
          <FormContainer onClose={this.handleOpenModal} invitationCode={this.props.match.params.code} />
        </Modal>
      </div>
    )
  }
}

export default LandingPage
