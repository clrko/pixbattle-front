import React, { Component } from 'react'
import LogoCamera from '../asset/logo/logo-camera.svg'
import './Modal.css'

class ModalComponent extends Component {
  // handleCloseModal = e => {
  //   e.preventDefault()
  //   this.props.close && this.props.close(e)
  // }

  render () {
    let modal = (
      <div className='modal-overlay-div'>
        <div className='ModalComponent'>
          <div className='modal-title-container'>
            {LogoCamera}
          </div>
          {/* <button onClick={this.handleCloseModal}>close</button> */}
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
