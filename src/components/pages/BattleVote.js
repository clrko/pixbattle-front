import React, { Component } from 'react'
import axios from 'axios'
import BattleVoteLightbox from './BattleVoteLightbox'

class BattleVote extends Component {
  state = {
    photos: [],
    currentUserVotes: []
  }

  getPhotos = () => {
    const { battleId } = this.props.location.state
    axios.post(`${process.env.REACT_APP_SERVER_URL}/gallery/battle`,
      {
        battleId: battleId
      }
    ).then(res => {
      this.setState({ photos: res.data })
    })
  }

  getStatusUser = () => {
    const { battleId } = this.props.location.state
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/battle/battle-vote/status-user`,
        {
          battleId: battleId
        },
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
    this.getStatusUser()
  }

  render () {
    const { photos, currentUserVotes } = this.state
    return (
      <div>
        <BattleVoteLightbox photos={photos} currentUserVotes={currentUserVotes} />
      </div>
    )
  }
}

export default BattleVote
