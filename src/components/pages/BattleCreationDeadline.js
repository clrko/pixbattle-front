import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import './BattleCreation.css'

const BattleCreationDeadline = () => {
  const [selectedDate, DateChange] = useState(new Date())
  const [selectedTime, TimeChange] = useState('10:00')

  return (
    <div className='battleCreation-page'>
      <div className='battleCreation-banner'>Créer une battle</div>
      <div className='cardBattle'>
        <h1>3. Choisis la date limite</h1>
        <div className='battleCreation-ruleContainer'>
          <DatePicker onChange={DateChange} value={selectedDate} />
          <TimePicker onChange={TimeChange} value={selectedTime} />
        </div>
        <div className='battleCreation-btnContainer'>
          <NavLink to='/battlecreationrule'><button className='battleCreation-cancelButton battle-btn' type='button'>Retour</button></NavLink>
          <button className='battleCreation-validateButton battle-btn' type='button'>Suivant</button> {/* Ajotuer lien vers next page de poste ta photo */}
        </div>
      </div>
    </div>
  )
}

export default BattleCreationDeadline
