import React, { Component } from 'react'
import axios from 'axios'
import DropDownVote from '../shared/DropDownVote'
import ListRankingMembers from '../shared/ListRankingMembers'

class BattleVoteParticipants extends Component {
  state = {
    participants: [],
    hasVoted: []
  }

  componentDidMount () {
    this.getVoteRanking()
  }

  getVoteRanking = () => {
    const { battleId } = this.props.match.params
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/battle-vote/${battleId}/members`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => this.setState({
        participants: res.data.allParticipants,
        hasVoted: res.data.allHasVoted
      })
      )
  }

  render () {
    const { participants, hasVoted } = this.state
    return (
      <div>
        <DropDownVote />
        <ListRankingMembers participants={participants} hasVoted={hasVoted} />
      </div>
    )
  }
}

export default BattleVoteParticipants
