import React, { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
import { connect } from 'react-redux'
import MyBattlesCardList from './MyBattlesCardList'
import Navbar from '../shared/Navbar'
import PageHeader from '../shared/PageHeader.js'
import StickyFooter from '../shared/StickyFooter'
import './MyBattles.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

const MyBattles = ({ user }) => {
  const [userBattleInformation, setUserBattleInformation] = useState([])

  useEffect(() => {
    getUserBattleInformation()
  }, [])

  const getUserBattleInformation = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/my-battles`,
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

  const getCompletedPercentage = (importedCreateDate, importedDeadline) => {
    const today = moment().local()
    const deadline = moment(importedDeadline)
    const createDate = moment(importedCreateDate)
    const differenceToToday = today.diff(createDate, 'seconds')
    const differenceToDeadline = deadline.diff(createDate, 'seconds')
    return (differenceToToday / differenceToDeadline) * 100
  }

  const getBattleTimeMessage = importedDeadline => {
    const deadline = moment(importedDeadline)
    const today = moment().local()
    const durationTodayToDeadline = moment.duration(deadline.diff(today))
    return `Il te reste ${durationTodayToDeadline.humanize()}`
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

  return (
    <div className='MyBattles-background'>
      <Navbar />
      <PageHeader pageTitle='Mes Battles' />
      <MyBattlesCardList
        userId={user.userId}
        userBattleInformation={userBattleInformation}
        getCompletedPercentage={getCompletedPercentage}
        getBattleTimeMessage={getBattleTimeMessage}
        getBattleStatus={getBattleStatus}
      />
      <StickyFooter />
    </div>
  )
}

export default connect(mapStateToProps)(MyBattles)
