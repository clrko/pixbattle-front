import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import CloudUpload from '../../asset/pictures/cloud-computing.png'
// import Countdown from 'react-countdown'
import DropDown from '../shared/DropDown'
import Navbar from '../shared/Navbar'
import StickyFooter from '../shared/StickyFooter'
import './PostPicture.css'
import './MyProfile.css'

const Menu = withRouter(DropDown)

class PostPicture extends React.Component {
    state = {
      previewPicture: CloudUpload,
      selectedFile: CloudUpload
    }

  handleChange = event => {
    const file = event.target.files[0]
    this.setState({
      selectedFile: URL.createObjectURL(file),
      file,
      loaded: 0
    })
  }

  handleClick = () => {
    const data = new FormData()
    data.append('file', this.state.file)
    axios.post('http://localhost:4242/battle-post/addpicture', data,
      {
        battleId: this.props.location.state
      },
      {
        // receive two    parameter endpoint url ,form data
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res => { // then print response status
        console.log(res.statusText)
      })
  }

  render () {
    console.log('this.this.props.location est', this.props.location.state)
    return (
      <div className='background-MyProfile'>
        <Navbar />
        <Menu />
        <div className='window-MyProfile'>
          <div className='countdown'>
            {/* <Countdown date={Date.now() + 100000} /> */}
          </div>
          <img className='picture' src={this.state.selectedFile} alt='preview-picture' />
          <input type='file' name='file' onChange={this.handleChange} />
          <button className='upload-ButtonPostpicture' type='button' onClick={this.handleClick}>Upload</button>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default PostPicture
