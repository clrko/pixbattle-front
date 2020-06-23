import React, { Component } from 'react'
import logoLP from '../../asset/logo/logo.svg'
import './Modal.css'

class ModalComponent extends Component {
  render () {
    let modal = (
      <div className='modal-overlay-div'>
        <div className='ModalComponent'>
          <div className='modal-title-container'>
            <img src={logoLP} alt='logo pix battle min' />
          </div>
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
