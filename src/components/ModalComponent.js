import React, { useState } from 'react'
import GroupNew from './GroupNew'
import Modal from 'react-modal'
import './ModalComponent.css'

const ModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal className='ModalComponent' isOpen={modalIsOpen}>
        <div className='modal-title-container'>
          <h2 className='modal-title'>Créer un groupe</h2>
          <div>
            <button
              className='modal-button'
              onClick={() => setModalIsOpen(false)}
            >
              <i className='fas fa-times' />
            </button>
          </div>
        </div>
        <GroupNew />
      </Modal>
    </div>
  )
}

export default ModalComponent
