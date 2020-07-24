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
  const [hasPosted, setHasPosted] = useState({})

  useEffect(() => {
    getUserBattleInformation()
      .then(getBattlePostedStatus)
  }, [])

  const getUserBattleInformation = () => {
    const backRoute = (location.state) ? `my-battles/${location.state.groupId}` : 'my-battles'
    return axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/${backRoute}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
      .then(res => {
        setUserBattleInformation(res.data)
        return res.data
      })
  }

  const getBattlePostedStatus = allUserBattles => {
    const battleIds = allUserBattles.map(battle => battle.battle_id)
    const query = battleIds.map(id => `id[]=${id}`).join('&')
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/battle-post/status-user?${query}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
      .then(res => {
        console.log('res.data', res.data)
        const updateHasPosted = {}
        res.data.forEach(battle => {
          updateHasPosted[battle.battle_id] = true
        })
        setHasPosted(updateHasPosted)
        return (res.data.length !== 0)
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

  const getBattleTimeMessage = (importedDeadline, importedStatus, hasPhoto) => {
    const deadline = moment(importedDeadline)
    const today = moment().local()
    if (importedStatus === 'completed') {
      return 'Va vite voir les resultats'
    }
    if (importedStatus === 'vote' && hasPhoto) {
      const deadlineToVote = moment(deadline.add(24, 'hours').format('YYYY-MM-DDTHH:mm:ss.SSSSZ'))
      const durationToVote = moment.duration(deadlineToVote.diff(today))
      return `Il te reste ${durationToVote.humanize()} pour voter`
    } else if (importedStatus === 'vote' && !hasPhoto) {
      return 'Tu n\'as pas participé'
    }

    if (importedStatus === 'post' && hasPhoto) {
      return 'Tu as déjà posté ta photo'
    } else {
      const durationTodayToDeadline = moment.duration(deadline.diff(today))
      return `Encore ${durationTodayToDeadline.humanize()} pour poster ta photo`
    }
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

  const getIsAbleStatus = (status, hasPhoto) => {
    switch (status) {
      case 'post':
        return !hasPhoto
      case 'vote':
        return hasPhoto
      case 'completed':
        return true
      default:
        console.warn('wrong status', status)
        return false
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
        hasPosted={hasPosted}
        getIsAbleStatus={getIsAbleStatus}
      />
    </div>
  )
}

export default connect(mapStateToProps)(MyBattles)
