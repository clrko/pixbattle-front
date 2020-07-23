import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DropDownVote from '../shared/DropDownVote'
import ListRankingMembers from '../shared/ListRankingMembers'

const BattleVoteParticipants = ({ match }) => {
  const [listParticipantVotes, setListParticipantVotes] = useState([])

  useEffect(() => {
    getVoteRanking()
  }, [])

  const getVoteRanking = () => {
    const { battleId } = match.params
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/battle-vote/${battleId}/members`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => setListParticipantVotes(res.data))
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
    <div>
      <DropDownVote />
      <ListRankingMembers listParticipants={listParticipantVotes} getIcon={getIcon} />
    </div>
  )
}

export default BattleVoteParticipants
