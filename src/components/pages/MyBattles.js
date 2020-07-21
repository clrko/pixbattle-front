import React, { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
import { connect } from 'react-redux'
import MyBattlesCardList from './MyBattlesCardList'
import PageHeader from '../shared/PageHeader.js'
import './MyBattles.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

const MyBattles = ({ user, history, location }) => {
  const [userBattleInformation, setUserBattleInformation] = useState([])

  useEffect(() => {
    getUserBattleInformation()
  }, [])

  const getUserBattleInformation = () => {
    const backRoute = (location.state) ? `my-battles/${location.state.groupId}` : 'my-battles'
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/${backRoute}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
      .then(res => {
        setUserBattleInformation(res.data)
      })
  }

  const getCompletedPercentage = (importedCreateDate, importedDeadline, importedStatus) => {
    const today = moment().local()
    const deadline = moment(importedDeadline)
    const createDate = moment(importedCreateDate)
    if (importedStatus === 'completed') {
      return 100
    }
    if (importedStatus === 'vote') {
      const durationVoteToToday = today.diff(deadline, 'hours')
      return (durationVoteToToday / 24) * 100
    }
    const differenceToToday = today.diff(createDate, 'seconds')
    const differenceToDeadline = deadline.diff(createDate, 'seconds')
    return (differenceToToday / differenceToDeadline) * 100
  }

  const getBattleTimeMessage = (importedDeadline, importedStatus) => {
    const deadline = moment(importedDeadline)
    const today = moment().local()
    if (importedStatus === 'completed') {
      return 'Va vite voir les resultats'
    }
    if (importedStatus === 'vote') {
      const deadlineToVote = moment(deadline.add(24, 'hours').format('YYYY-MM-DDTHH:mm:ss.SSSSZ'))
      const durationToVote = moment.duration(deadlineToVote.diff(today))
      return `Il te reste ${durationToVote.humanize()} pour voter`
    }
    const durationTodayToDeadline = moment.duration(deadline.diff(today))
    return `Encore ${durationTodayToDeadline.humanize()} pour poster ta photo`
  }

  const getBattleStatus = importedStatus => {
    switch (importedStatus) {
      case 'post':
        return 'Poste ta photo'
      case 'vote':
        return 'Vote'
      case 'completed':
        return 'Resultats'
      default:
        return importedStatus
    }
  }

  const handleClick = (selectedGroupId, selectedBattleId, importedStatus) => {
    switch (importedStatus) {
      case 'post':
        history.push(`/groups/${selectedGroupId}/battles/${selectedBattleId}/post-picture`, {
          battleId: selectedBattleId,
          groupId: selectedGroupId
        })
        break
      case 'vote':
        history.push(`/groups/${selectedGroupId}/battles/${selectedBattleId}/vote`, {
          battleId: selectedBattleId,
          groupId: selectedGroupId
        })
        break
      case 'completed':
        history.push(`/groups/${selectedGroupId}/battles/${selectedBattleId}/results`, {
          battleId: selectedBattleId,
          groupId: selectedGroupId
        })
        break
      default:
        window.location.reload(true)
        break
    }
  }

  return (
    <div className='MyBattles-background'>
      <PageHeader pageTitle={location.state ? `Mes Battles - Groupe ${location.state.groupName}` : 'Mes Battles'} />
      <MyBattlesCardList
        userId={user.userId}
        userBattleInformation={userBattleInformation}
        getCompletedPercentage={getCompletedPercentage}
        getBattleTimeMessage={getBattleTimeMessage}
        getBattleStatus={getBattleStatus}
        handleClick={handleClick}
      />
    </div>
  )
}

export default connect(mapStateToProps)(MyBattles)
