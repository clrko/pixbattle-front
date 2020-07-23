import React from 'react'
import axios from 'axios'
import Lightbox from '../shared/Lightbox'
import DropDownResults from '../shared/DropDownResults'

class BattleResultsPhotos extends React.Component {
  state = {
    photos: []
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
      .then(res => this.setState({ photos: res.data })
      )
  }

  componentDidMount () {
    this.getPhotos()
  }

  render () {
    const { photos } = this.state
    return (
      <div>
        <DropDownResults />
        <Lightbox photos={photos} />
      </div>
    )
  }
}

export default BattleResultsPhotos
