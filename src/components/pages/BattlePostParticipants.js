import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DropDownPost from '../shared/DropDownPost'
import ListRankingMembers from '../shared/ListRankingMembers'

const BattlePostParticipants = ({ match }) => {
  const [listParticipantPost, setListParticipantPost] = useState([])

  useEffect(() => {
    getPostRanking()
  }, [])

  const getPostRanking = () => {
    const { battleId } = match.params
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/battle-post/${battleId}/members`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => setListParticipantPost(res.data))
  }

  const getIcon = (item) => {
    if (Object.keys(item).includes('victories')) {
      return <i className='fas fa-trophy fa-trophy-RankingMembers'><p>{item.victories}</p></i>
    } else if (Object.keys(item).includes('posted')) {
      if (item.posted !== 0) {
        return <i className='far fa-image' />
      }
    } else if (Object.keys(item).includes('voted')) {
      if (item.voted !== 0) {
        return <i className='fas fa-check' />
      }
    }
  }

  return (
    <div>
      <DropDownPost />
      <ListRankingMembers listParticipants={listParticipantPost} getIcon={getIcon} />
    </div>
  )
}

export default BattlePostParticipants
