import React from 'react'
import MyGroupsCard from './MyGroupsCard.js'
import './MyBattles.css'

const MyGroupsCardList = ({ userId, userGroupInformation, getOngoingBattlesMessage, getFinishedBattlesMessage, getGroupMemberMessage, handleClick, handleSettingsClick }) => (
  <div className='MyGroups-cardList'>
    <div>
      {userGroupInformation.map(group =>
        <MyGroupsCard
          key={group.group_id}
          groupName={group.group_name}
          userAdmin={group.admin_user_id === userId}
          ongoingBattles={getOngoingBattlesMessage(group.ongoingBattles)}
          finishedBattles={getFinishedBattlesMessage(group.finishedBattles)}
          groupMembers={getGroupMemberMessage(group.groupMembers)}
          handleClick={() => handleClick(group.group_id, group.group_name)}
          handleSettingsClick={() => handleSettingsClick(group.group_id, group.group_name)}
        />
      )}
    </div>
  </div>
)

export default MyGroupsCardList
