import React, { useState } from 'react'
import { connect } from 'react-redux'
import DateTime from 'react-datetime'
import { NavLink } from 'react-router-dom'
import { ADD_DEADLINE } from '../../store/action-types'
import 'moment/locale/fr'
import './BattleCreation.css'
import './BattleCreationDeadline.css'

/* const mapStateToProps = state => {
  const { battleCreation } = state
  return battleCreation
} */

const BattleCreationDeadline = (props) => {
  const [selectedDate, setDateChange] = useState(new Date())
  const [selectedTime, setTimeChange] = useState('12:00 AM')
  /* const [battleFeatures, setBattleFeatures] = useState(this.props.battleCreation) */

  const handleDateChange = e => {
    setDateChange(e)
  }

  const handleTimeChange = e => {
    setTimeChange(e)
  }

  const handleSubmit = () => {
    const selectedDeadline = [selectedDate.format('YYYY-MM-DD'), selectedTime.format('h:mm a')].join(' ')
    const { dispatch, history } = props
    dispatch({ type: ADD_DEADLINE, selectedDeadline })
    history.push('/')
  }

  return (
    <div className='battleCreation-page'>
      <div className='battleCreation-banner'>Créer une battle</div>
      <div className='cardBattle'>
        <h1 className='cardBattle-color'>3. Choisis la date limite</h1>
        <div className='battleCreation-deadlineContainer'>
          <div className='battleCreation-dateTimeContainer'>
            <DateTime value={selectedDate} onChange={handleDateChange} timeFormat={false} locale='fr-FR' dateFormat='dddd Do MMMM YYYY' />
          </div>
          <div className='battleCreation-dateTimeContainer'>
            <DateTime value={selectedTime} onChange={handleTimeChange} dateFormat={false} locale='fr' timeFormat='h:mm a' timeIntervals={15} />
          </div>
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
