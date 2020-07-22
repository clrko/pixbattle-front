import React, { Component } from 'react'
import axios from 'axios'
import DropDownVote from '../shared/DropDownVote'
import BattleVoteLightbox from './BattleVoteLightbox'

class BattleVote extends Component {
  state = {
    photos: [],
    currentUserVotes: []
  }

  getPhotos = () => {
    const { battleId } = this.props.match.params
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/gallery/battle/${battleId}`)
      .then(res => {
        this.setState({ photos: res.data })
      })
  }

  getStatusCurrentUser = () => {
    const { battleId } = this.props.match.params
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/battle-vote/${battleId}/status-user`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => {
        this.setState({ currentUserVotes: res.data })
      })
  }

  componentDidMount () {
    this.getPhotos()
    this.getStatusCurrentUser()
  }

  render () {
    const { photos, currentUserVotes } = this.state
    return (
      <div className='battle-vote-container'>
        <DropDownVote />
        <BattleVoteLightbox photos={photos} currentUserVotes={currentUserVotes} />
      </div>
    )
  }
}

export default BattleVote
