import React from 'react'
import MyBattlesCard from './MyBattlesCard'
import './MyBattles.css'

const MyBattlesCardList = ({ userId, userBattleInformation, getCompletedPercentage, getBattleTimeMessage, getBattleStatus, handleClick }) => (
  <div className='MyBattles-cardList'>
    {userBattleInformation.map((battle, i) =>
      <MyBattlesCard
        key={i}
        battleTheme={battle.theme_name}
        battleStatus={getBattleStatus(battle.status_name)}
        battleGroup={battle.group_name}
        userAdmin={battle.admin_user_id === userId}
        completed={getCompletedPercentage(battle.create_date, battle.deadline)}
        battleTimeMessage={getBattleTimeMessage(battle.deadline)}
        handleClick={() => handleClick(battle.group_id, battle.battle_id, battle.status_name)}
      />)}
  </div>
)

export default MyBattlesCardList
