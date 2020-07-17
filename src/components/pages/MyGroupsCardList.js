import React from 'react'
import MyGroupsCard from './MyGroupsCard.js'
import './MyBattles.css'

const MyGroupsCardList = ({ userId, userGroupInformation, getOngoingBattlesMessage, getFinishedBattlesMessage, getGroupMemberMessage }) => (
  <div className='MyGroups-cardList'>
    {userGroupInformation.map(group =>
      <MyGroupsCard
        key={group.group_id}
        groupName={group.group_name}
        userAdmin={group.admin_user_id === userId}
        ongoingBattles={getOngoingBattlesMessage(group.ongoingBattles)}
        finishedBattles={getFinishedBattlesMessage(group.finishedBattles)}
        groupMembers={getGroupMemberMessage(group.groupMembers)}
      />
    )}
  </div>
)

export default MyGroupsCardList
