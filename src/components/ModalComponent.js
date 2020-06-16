import React, { useState, useEffect } from 'react'
import GroupNew from './GroupNew'
import Modal from 'react-modal'

import './ModalComponent.css'

const ModalComponent = (props) => {
  const { typeOfContent } = props
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [getContent, setGetContent] = useState('')
  const [modalTitle, setModalTitle] = useState('')

  useEffect(() => {
    switch (typeOfContent) {
      case 'loginRegister':
        setModalTitle('Account')
        setGetContent(<p>Ceci est le composant login register form</p>)
        break
      case 'newGroup':
        setModalTitle('Créer un groupe')
        setGetContent(<GroupNew />)
        break
      case 'newBattleTheme':
        setModalTitle('Créer une battle')
        setGetContent(<p>Ceci est le composant newbattle thème</p>)
        break
      case 'newBattleOptions':
        setModalTitle('Créer une battle')
        setGetContent(<p>Ceci est le composant newbattle option</p>)
        break
      case 'newBattleDeadline':
        setModalTitle('Créer une battle')
        setGetContent(<p>Ceci est le composant newbattle deadline</p>)
        break
      default:
        setModalTitle('')
        setGetContent(<></>)
    }
  }, [typeOfContent])

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal className='ModalComponent' isOpen={modalIsOpen}>
        <div className='modal-title-container'>
          <h2 className='modal-title'>{modalTitle}</h2>
          <div>
            <button className='modal-button' onClick={() => setModalIsOpen(false)}>
              <i className='fas fa-times' />
            </button>
          </div>
        </div>
        {getContent}
      </Modal>
    </div>
  )
}

export default ModalComponent
