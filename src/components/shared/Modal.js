import React, { Component } from 'react'
import logoLP from '../../asset/logo/logo.svg'
import './Modal.css'

class ModalComponent extends Component {
  componentDidMount () {

  }

  render () {
    let modal = (
      <div className='modal-overlay-div'>
        <div className='ModalComponent'>
          {
            this.props.children._owner.type.name === 'LandingPage' &&
              <div className='modal-title-container'>
                <img src={logoLP} alt='logo pix battle min' />
              </div>
          }
          {this.props.children}
        </div>
      </div>
    )
    if (!this.props.isOpen) {
      modal = null
    }
    return (
      <div>{modal}</div>
    )
  }
}

export default ModalComponent
