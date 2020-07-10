import React from 'react'
import './MyBattles.css'

const MyBattlesCard = ({ battleTheme, battleTimeMessage, battleStatus, battleGroup, userAdmin }) => {
  return (
    <div className='MyBattles-card'>
      <h2 className='MyBattles-card-title'>{battleTheme}</h2>
      <i className={userAdmin ? 'fas fa-crown MyBattles-crown' : 'MyBattles-notAdmin'} />
      <p className='MyBattles-card-time'>{battleTimeMessage}</p>
      <button className='MyBattles-card-button'>{battleStatus}</button>
      <p className='MyBattles-card-group'>{battleGroup}</p>
    </div>
  )
}

export default MyBattlesCard
