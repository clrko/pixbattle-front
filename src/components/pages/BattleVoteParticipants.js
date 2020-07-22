import React, { Component } from 'react'
import axios from 'axios'
import DropDownVote from '../shared/DropDownVote'
import ListRankingMembers from '../shared/ListRankingMembers'

class BattleVoteParticipants extends Component {
  state = {
    participants: []
  }

  componentDidMount () {
    this.getVoteRanking()
  }

  getVoteRanking = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/profile/ranking`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => console.log(res)
      )
  }

  render () {
    return (
      <div>
        <DropDownVote />
        <ListRankingMembers />
      </div>
    )
  }
}

export default BattleVoteParticipants
