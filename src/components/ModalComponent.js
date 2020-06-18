import React, { useState, useEffect } from 'react'
import BattleCreationTheme from './pages/BattleCreationTheme'
import GroupNew from './GroupNew'
import LoginRegistrationForm from '../components/pages/LoginRegistrationFormPage'
import Modal from 'react-modal'

import './ModalComponent.css'

const ModalComponent = (props) => {
  const { typeOfContent } = props
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [getContent, setGetContent] = useState('')
  const [getButtonName, setGetButtonName] = useState('')
  const [modalTitle, setModalTitle] = useState('')

  useEffect(() => {
    switch (typeOfContent) {
      case 'loginRegister':
        setModalTitle('')
        setGetContent(<LoginRegistrationForm />)
        setGetButtonName('Jouer')
        break
      case 'newGroup':
        setModalTitle('Créer un groupe')
        setGetContent(<GroupNew />)
        setGetButtonName('Créer un groupe')
        break
      case 'newBattleTheme':
        setModalTitle('Créer une battle')
        setGetContent(<BattleCreationTheme />)
        setGetButtonName('Créer une battle')
        break
      case 'newBattleOptions':
        setModalTitle('Créer une battle')
        setGetContent(<p>Ceci est le composant newbattle option</p>)
        setGetButtonName('Créer une battle')
        break
      case 'newBattleDeadline':
        setModalTitle('Créer une battle')
        setGetContent(<p>Ceci est le composant newbattle deadline</p>)
        setGetButtonName('Créer une battle')
        break
      default:
        setModalTitle('')
        setGetContent(<></>)
        setGetButtonName('')
    }
  }, [typeOfContent])

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>{getButtonName}</button>
      <Modal className='ModalComponent' ariaHideApp={false} isOpen={modalIsOpen}>
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
