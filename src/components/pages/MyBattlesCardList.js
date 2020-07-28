import React from 'react'
import MyBattlesCard from './MyBattlesCard'
import './MyBattles.css'

const MyBattlesCardList = ({ userId, userBattleInformation, getCompletedPercentage, getBattleTimeMessage, getBattleStatus, handleClick, getIsAbleStatus, hasPosted }) => (
  <div className='MyBattles-cardList'>
    <div>
      {userBattleInformation.map((battle, i) =>
        <MyBattlesCard
          key={i}
          battleTheme={battle.theme_name}
          battleStatus={getBattleStatus(battle.status_name)}
          battleGroup={battle.group_name}
          userAdmin={battle.admin_user_id === userId}
          completed={getCompletedPercentage(battle.create_date, battle.deadline, battle.status_name)}
          battleTimeMessage={getBattleTimeMessage(battle.deadline, battle.status_name, hasPosted[battle.battle_id])}
          handleClick={() => handleClick(battle.group_id, battle.battle_id, battle.status_name)}
          showButton={getIsAbleStatus(battle.status_name, hasPosted[battle.battle_id])}
        />)}
    </div>
  </div>
)

export default MyBattlesCardList
