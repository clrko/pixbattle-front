import React from 'react'
// import { connect } from 'react-redux'
// import Navbar from '../shared/Navbar'
import PageHeader from '../shared/PageHeader.js'
// import StickyFooter from '../shared/StickyFooter'
import './MyGroups.css'
import MyGroupsCardList from './MyGroupsCardList.js'

/* const mapStateToProps = state => {
  const { user } = state
  return { user }
} */

const MyGroups = (/* { user } */) => {
  const userGroupInformation = [
    {
      group_id: 1,
      group_name: 'Team Pix Battle',
      admin_user_id: 1,
      ongoingBattles: 1,
      finishedBattles: 2,
      groupMembers: 6
    },
    {
      group_id: 2,
      group_name: 'Testgroup2',
      admin_user_id: 5,
      ongoingBattles: 2,
      finishedBattles: 1,
      groupMembers: 10
    },
    {
      group_id: 3,
      group_name: 'Testgroup5',
      admin_user_id: 2,
      ongoingBattles: 0,
      finishedBattles: 0,
      groupMembers: 4
    }
  ]

  const getOngoingBattlesMessage = importedOngoingBattleCount => {
    if (importedOngoingBattleCount > 1) {
      return `${importedOngoingBattleCount} battles en cours`
    } else if (importedOngoingBattleCount === 1) {
      return `${importedOngoingBattleCount} battle en cours`
    } else {
      return 'Aucune battle en cours'
    }
  }

  const getFinishedBattlesMessage = importedFinishedBattleCount => {
    if (importedFinishedBattleCount > 1) {
      return `${importedFinishedBattleCount} battles terminées`
    } else if (importedFinishedBattleCount === 1) {
      return `${importedFinishedBattleCount} battle terminée`
    } else {
      return 'Aucune battle terminée'
    }
  }

  const getGroupMemberMessage = importedGroupMemberCount => {
    return `${importedGroupMemberCount} membres`
  }

  return (
    <div className='background-MyGroups'>
      {/* <Navbar /> */}
      <PageHeader pageTitle='Mes Groupes' />
      <MyGroupsCardList
        userGroupInformation={userGroupInformation}
        userId={1}
        getOngoingBattlesMessage={getOngoingBattlesMessage}
        getFinishedBattlesMessage={getFinishedBattlesMessage}
        getGroupMemberMessage={getGroupMemberMessage}
      />
      {/* <StickyFooter /> */}
    </div>
  )
}
/* Ne pas oublier d'ajouter le handleclick + recuperer le groupId, le userId */
// export default connect(mapStateToProps)(MyGroups)
export default MyGroups
