import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Navbar from '../shared/Navbar'
import DropDown from '../shared/DropDown'
import Lightbox from '../shared/Lightbox'
import StickyFooter from '../shared/StickyFooter'
import './MyPictures.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

class MyPictures extends Component {
  state = {
    photos: []
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
      .then(res => this.setState({ photos: res.data }))
  }

  render () {
    const { photos } = this.state
    return (
      <div className='background-MyPictures'>
        <Navbar />
        <DropDown />
        <div className='window-MyPictures'>
          <Lightbox photos={photos} />
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default connect(mapStateToProps)(MyPictures)
