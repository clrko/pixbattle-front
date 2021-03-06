import React from 'react'
import axios from 'axios'
import Lightbox from '../shared/Lightbox'
import DropDownResults from '../shared/DropDownResults'

class BattleResultsPhotos extends React.Component {
  state = {
    photos: [],
    usersVotes: []
  }

  getPhotos = () => {
    const { battleId } = this.props.match.params
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/battle-results/${battleId}/photos`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => this.setState({
        photos: res.data.photos,
        usersVotes: res.data.users
      })
      )
  }

  componentDidMount () {
    this.getPhotos()
  }

  render () {
    const { photos, usersVotes } = this.state
    return (
      <div>
        <DropDownResults />
        <Lightbox photos={photos} votes={usersVotes} />
      </div>
    )
  }
}

export default BattleResultsPhotos
