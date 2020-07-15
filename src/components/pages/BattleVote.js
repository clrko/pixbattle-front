import React, { Component } from 'react'
import axios from 'axios'
// import Footer from '../shared/StickyFooter'
import Lightbox from '../shared/Lightbox'

class BattleVote extends Component {
  state = {
    photos: [],
    currentUserVotes: []
  }

  getPhotos = () => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/gallery/battle`,
      {
        battleId: 1
      }
    ).then(res => {
      this.setState({ photos: res.data })
    })
  }

  getStatusUser = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/battle-vote/status-user`,
        {
          battleId: 1
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
        <Lightbox photos={photos} currentUserVotes={currentUserVotes} />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default BattleVote
