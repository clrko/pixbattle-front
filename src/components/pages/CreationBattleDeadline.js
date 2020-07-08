import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import DateTime from 'react-datetime'
import { ADD_DEADLINE } from '../../store/action-types'
import Modal from '../shared/Modal'
import CreationBattleSummary from './CreationBattleSummary'
import 'moment/locale/fr'
import './CreationBattle.css'
import './CreationBattleDeadline.css'

const CreationBattleDeadline = (props) => {
  const [selectedDate, setDateChange] = useState(new Date())
  const [selectedTime, setTimeChange] = useState('12:00 AM')
  const [isOpen, setIsOpen] = useState(false)

  const handleDateChange = e => {
    setDateChange(e)
  }

  const handleTimeChange = e => {
    setTimeChange(e)
  }

  const handleSubmit = e => {
    const selectedDeadline = [selectedDate.format('YYYY-MM-DD'), selectedTime.format('h:mm a')].join(' ')
    const { dispatch } = props
    dispatch({ type: ADD_DEADLINE, selectedDeadline })
    setIsOpen(!isOpen)
  }

  const handleOpenModal = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className='battleCreation-page'>
      <div className='cardBattle'>
        <h1 className='cardBattle-color'>3. Choisis la date limite</h1>
        <div className='battleCreation-deadlineContainer'>
          <div className='battleCreation-dateTimeContainer'>
            <DateTime
              value={selectedDate}
              onChange={handleDateChange}
              timeFormat={false}
              locale='fr-FR'
              dateFormat='dddd Do MMMM YYYY'
            />
          </div>
          <div className='battleCreation-dateTimeContainer'>
            <DateTime
              value={selectedTime}
              onChange={handleTimeChange}
              dateFormat={false} locale='fr'
              timeFormat='h:mm a'
              timeIntervals={15}
            />
          </div>
        </div>
        <div className='battleCreation-btnContainer'>
          <NavLink to='/battle-creation/rule'>
            <button
              className='battleCreation-cancelButton battle-btn'
              type='button'
            >
              Retour
            </button>
          </NavLink>
          <button
            className='battleCreation-validateButton battle-btn'
            type='button'
            onClick={handleSubmit}
          >
            Valider
          </button>
          <Modal isOpen={isOpen}>
            <CreationBattleSummary onClose={handleOpenModal} />
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default connect()(withRouter(CreationBattleDeadline))
