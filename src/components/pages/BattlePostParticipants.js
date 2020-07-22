import React, { Component } from 'react'
import axios from 'axios'
import DropDownPost from '../shared/DropDownPost'
import ListRankingMembers from '../shared/ListRankingMembers'

class BattlePostParticipants extends Component {
  state = {
    participants: [],
    hasPosted: []
  }

  componentDidMount () {
    this.getPostRanking()
  }

  getPostRanking = () => {
    const { battleId } = this.props.match.params
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/battle-post/${battleId}/members`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => this.setState({
        participants: res.data.battleMembers,
        hasPosted: res.data.battleMemberStatus
      })
      )
  }

  render () {
    const { participants, hasPosted } = this.state
    console.log(participants, hasPosted)
    return (
      <div>
        <DropDownPost />
        <ListRankingMembers participants={participants} hasPosted={hasPosted} />
      </div>
    )
  }
}

export default BattlePostParticipants
