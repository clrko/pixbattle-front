import React, { useState } from 'react'
import { connect } from 'react-redux'
import DateTime from 'react-datetime'
import { NavLink } from 'react-router-dom'
import { ADD_DEADLINE } from '../../store/action-types'

import './BattleCreation.css'
import './BattleCreationDeadline.css'

/* const mapStateToProps = state => {
  const { battleCreation } = state
  return battleCreation
} */

const BattleCreationDeadline = (props) => {
  const [selectedDate, setDateChange] = useState(new Date())
  const [selectedTime, setTimeChange] = useState('10:00')
  /* const [battleFeatures, setBattleFeatures] = useState(this.props.battleCreation) */

  const handleDateChange = e => {
    setDateChange(e)
  }

  const handleTimeChange = e => {
    setTimeChange(e)
  }

  const handleSubmit = () => {
    const selectedDeadline = [selectedDate.format('YYYY-MM-DD'), selectedTime.format('h:mm A')].join(' ')
    const { dispatch, history } = props
    dispatch({ type: ADD_DEADLINE, selectedDeadline })
    history.push('/')
  }

  return (
    <div className='battleCreation-page'>
      <div className='battleCreation-banner'>Créer une battle</div>
      <div className='cardBattle'>
        <h1>3. Choisis la date limite</h1>
        <div className='battleCreation-deadlineContainer'>
          <DateTime value={selectedDate} onChange={handleDateChange} timeFormat={false} locale='fr' />
          <DateTime value={selectedTime} onChange={handleTimeChange} dateFormat={false} locale='fr' />
        </div>
        <div className='battleCreation-btnContainer'>
          <NavLink to='/battlecreationrule'><button className='battleCreation-cancelButton battle-btn' type='button'>Retour</button></NavLink>
          <button className='battleCreation-validateButton battle-btn' type='button' onClick={handleSubmit}>Valider</button>
        </div>
      </div>
    </div>
  )
}

export default connect(/* mapStateToProps */)(BattleCreationDeadline)
