import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import MyGroupsCardList from './MyGroupsCardList.js'
import PageHeader from '../shared/PageHeader.js'
import './MyGroups.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

const MyGroups = ({ user, history }) => {
  const [userGroupInformation, setUserGroupInformation] = useState([])

  useEffect(() => {
    getUserGroupInformation()
  }, [])

  const getUserGroupInformation = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/group/my-groups`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
      .then(res => {
        setUserGroupInformation(res.data)
      })
  }

  const getOngoingBattlesMessage = importedOngoingBattleCount => {
    if (parseInt(importedOngoingBattleCount) > 1) {
      return `${importedOngoingBattleCount} battles en cours`
    } else if (parseInt(importedOngoingBattleCount) === 1) {
      return `${importedOngoingBattleCount} battle en cours`
    } else {
      return 'Aucune battle en cours'
    }
  }

  const getFinishedBattlesMessage = importedFinishedBattleCount => {
    if (parseInt(importedFinishedBattleCount) > 1) {
      return `${importedFinishedBattleCount} battles terminées`
    } else if (parseInt(importedFinishedBattleCount) === 1) {
      return `${importedFinishedBattleCount} battle terminée`
    } else {
      return 'Aucune battle terminée'
    }
  }

  const getGroupMemberMessage = importedGroupMemberCount => {
    return `${importedGroupMemberCount} membres`
  }

  const handleClick = (selectedGroupId, selectedGroupName) => {
    history.push(`/${user.username}/battles`, {
      groupId: selectedGroupId,
      groupName: selectedGroupName
    })
  }

  const handleSettingsClick = (selectedGroupId, selectedGroupName) => {
    history.push(`/groups/${selectedGroupId}/settings`, {
      groupId: selectedGroupId,
      groupName: selectedGroupName
    })
  }

  return (
    <div className='background-MyGroups'>
      <PageHeader pageTitle='Mes Groupes' />
      <MyGroupsCardList
        userGroupInformation={userGroupInformation}
        userId={user.userId}
        getOngoingBattlesMessage={getOngoingBattlesMessage}
        getFinishedBattlesMessage={getFinishedBattlesMessage}
        getGroupMemberMessage={getGroupMemberMessage}
        handleClick={handleClick}
        handleSettingsClick={handleSettingsClick}
      />
    </div>
  )
}

export default connect(mapStateToProps)(MyGroups)
