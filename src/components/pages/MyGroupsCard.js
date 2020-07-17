import React from 'react'
import './MyGroups.css'

const MyGroupsCard = ({ groupName, userAdmin, ongoingBattles, finishedBattles, groupMembers }) => {
  return (
    <div className='MyGroups-card'>
      <h2 className='MyGroups-card-title'>{groupName}</h2>
      <i className={userAdmin ? 'fas fa-crown MyGroups-crown' : 'MyGroups-notAdmin'} />
      <p className='MyGroups-card-battle'>{ongoingBattles}</p>
      <p className='MyGroups-card-battle'>{finishedBattles}</p>
      <p className='MyGroups-card-member'>{groupMembers}</p>
      <button className='MyGroups-card-button'>Voir</button>
    </div>
  )
}

export default MyGroupsCard
