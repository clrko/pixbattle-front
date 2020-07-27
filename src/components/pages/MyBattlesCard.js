import React from 'react'
import MyBattlesProgressBar from './MyBattlesProgressBar'
import './MyBattles.css'

const MyBattlesCard = ({ battleTheme, battleTimeMessage, battleStatus, battleGroup, userAdmin, completed, handleClick, showButton }) => {
  return (
    <div className='MyBattles-card'>
      <h2 className='MyBattles-card-title'>{battleTheme}</h2>
      <i className={userAdmin ? 'fas fa-crown MyBattles-crown' : 'MyBattles-notAdmin'} />
      <p className='MyBattles-card-time'>{battleTimeMessage}</p>
      <MyBattlesProgressBar completed={completed} />
      {showButton && <button className='MyBattles-card-button' onClick={handleClick}>{battleStatus}</button>}
      <p className='MyBattles-card-group'>{battleGroup}</p>
    </div>
  )
}

export default MyBattlesCard
