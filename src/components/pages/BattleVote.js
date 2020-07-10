import React, { Component } from 'react'
import axios from 'axios'
import Footer from '../shared/StickyFooter'
import Lightbox from '../shared/Lightbox'

class BattleVote extends Component {
  state = {
    photos: []
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

  componentDidMount () {
    this.getPhotos()
  }

  render () {
    const { photos } = this.state
    return (
      <div>
        <Lightbox photos={photos} />
        <Footer />
      </div>
    )
  }
}

export default BattleVote
