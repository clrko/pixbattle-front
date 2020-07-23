import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DropDownMyProfile from '../shared/DropDownMyProfile'
import ListRankingMembers from '../shared/ListRankingMembers'
import './MyRanking.css'

const MyRanking = () => {
  const [listParticipantVictories, setListParticipantVictories] = useState([])

  useEffect(() => {
    getMyRanking()
  }, [])

  const getMyRanking = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/profile/my-ranking`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => {
        setListParticipantVictories(res.data)
      })
  }

  const getIcon = (item) => {
    if (Object.keys(item).includes('victories')) {
      return <i className='fas fa-trophy fa-trophy-RankingMembers'><p>{item.victories}</p></i>
    } else if (Object.keys(item).includes('posted')) {
      return parseInt(item.posted) !== 0 ? <i className='far fa-image' /> : <></>
    } else if (Object.keys(item).includes('voted')) {
      return parseInt(item.voted) !== 0 ? <i className='fas fa-check' /> : <></>
    }
  }

  return (
    <div className='background-MyRanking'>
      <DropDownMyProfile />
      <ListRankingMembers listParticipants={listParticipantVictories} getIcon={getIcon} />
    </div>
  )
}

export default MyRanking
