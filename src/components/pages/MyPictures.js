import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import DropDown from '../shared/DropDown'
import Lightbox from '../shared/Lightbox'
import './MyPictures.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

class MyPictures extends Component {
  state = {
    photos: [],
    usersVotes: []
  }

  componentDidMount () {
    this.getPhotos()
  }

  getPhotos = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/gallery/user/${this.props.user.userId}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => this.setState({
        photos: res.data.photosUserUrls,
        usersVotes: res.data.userVoteInfos
      })
      )
  }

  render () {
    const { photos, usersVotes } = this.state
    return (
      <div className='background-MyPictures'>
        <DropDown />
        <div className='window-MyPictures'>
          <Lightbox photos={photos} votes={usersVotes} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MyPictures)
