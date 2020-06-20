import React, { useState } from 'react'
import LoginRegistrationForm from '../components/pages/LoginRegistrationFormPage'
import Modal from 'react-modal'

import './ModalComponent.css'

const ModalComponent = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>
      <button className='pitch-button' onClick={() => setModalIsOpen(true)}>JOUER</button>
      <Modal className='ModalComponent' ariaHideApp={false} isOpen={modalIsOpen}>
        <div className='modal-title-container'>
          <div>
            <button className='modal-button' onClick={() => setModalIsOpen(false)}>
              <i className='fas fa-times' />
            </button>
          </div>
        </div>
        <LoginRegistrationForm />
      </Modal>
    </div>
  )
}

export default ModalComponent
