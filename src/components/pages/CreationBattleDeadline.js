import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import DateTime from 'react-datetime'
import moment from 'moment'
import { ADD_DEADLINE, REMOVE_RULES } from '../../store/action-types'
import Modal from '../shared/Modal'
import CreationBattleSummary from './CreationBattleSummary'
import 'moment/locale/fr'
import './CreationBattle.css'
import './CreationBattleDeadline.css'

const CreationBattleDeadline = (props) => {
  const [selectedDate, setDateChange] = useState(moment())
  const [selectedTime, setTimeChange] = useState('01:00:00') // moment().format('HH:mm:ss')
  const [timeConstraints, setTimeConstraints] = useState({ hours: { min: Number(DateTime.moment().format('H')), max: 23 } })
  const [isOpen, setIsOpen] = useState(false)

  const yesterday = DateTime.moment().subtract(1, 'day')

  const isValidDate = (current) => {
    return current.isAfter(yesterday)
  }

  const handleDateChange = e => {
    // if (e.isAfter(DateTime.moment()))
    const today = DateTime.moment()
    const isAfterToday = (selectedDate.isAfter(today))
    const hour = Number(today.format('H'))
    const newTimeConstraints = isAfterToday ? { hours: { min: 0, max: 23 } } : { hours: { min: hour, max: 23 } }
    setTimeConstraints(newTimeConstraints)
    setDateChange(e)
  }

  const handleTimeChange = e => {
    setTimeChange(e.format('LTS'))
  }

  const handleSubmit = e => {
    const selectedDeadline = [selectedDate.format('YYYY-MM-DD'), selectedTime].join(' ')
    const { dispatch } = props
    dispatch({ type: ADD_DEADLINE, selectedDeadline })
    setIsOpen(!isOpen)
  }

  const handleReturn = e => {
    const { dispatch } = props
    dispatch({ type: REMOVE_RULES })
  }

  const handleOpenModal = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className='battleCreation-page'>
      <div className='cardBattle'>
        <h1 className='cardBattle-color'>Choisis la date limite</h1>
        <div className='battleCreation-deadlineContainer'>
          <div className='battleCreation-dateTimeContainer'>
            <DateTime
              value={selectedDate}
              onChange={handleDateChange}
              timeFormat={false}
              locale='fr-FR'
              dateFormat='dddd Do MMMM YYYY'
              isValidDate={isValidDate}
              closeOnSelect
            />
          </div>
          <div className='battleCreation-dateTimeContainer'>
            <DateTime
              value={selectedTime}
              onChange={handleTimeChange}
              dateFormat={false} locale='fr'
              timeFormat='HH:mm:ss'
              timeIntervals={15}
              timeConstraints={timeConstraints}
            />
          </div>
        </div>
        <div className='battleCreation-btnContainer'>
          <NavLink to='/battle-creation/rule'>
            <button
              className='battleCreation-cancelButton battle-btn'
              type='button'
              onClick={handleReturn}
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
