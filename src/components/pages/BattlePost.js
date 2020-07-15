import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import CloudUpload from '../../asset/pictures/cloud-computing.png'
import DropDown from '../shared/DropDown'
import Navbar from '../shared/Navbar'
import StickyFooter from '../shared/StickyFooter'
import './BattlePost.css'
import './MyProfile.css'

const Menu = withRouter(DropDown)

class BattlePost extends React.Component {
  state = {
    previewPicture: CloudUpload,
    selectedFile: CloudUpload
  }

  componentDidMount () {
    this.handleInfosBattle()
  }

  handleInfosBattle = () => {
    const { battleId, groupId } = this.props.match.params
    console.log('params', this.props.match.params.id, 'props.locarion', groupId)
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle-post/${groupId}/${battleId}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      ).then(res => {
        console.log(res.data)
      })
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
    const { battleId, groupId } = this.props.location.state
    data.append('battleId', battleId)
    data.append('groupId', groupId)
    axios.post('http://localhost:4242/battle-post/addpicture', data,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .catch(() => {
        alert('Error while uploading the picture! Try again please.')
      })
  }

  render () {
    return (
      <div className='background-MyProfile'>
        <Navbar />
        <Menu />
        <div className='window-MyProfile'>
          <div className='countdown' />
          <img className='picture' src={this.state.selectedFile} alt='preview-picture' />
          <input type='file' name='file' onChange={this.handleChange} />
          <button className='upload-ButtonPostpicture' type='button' onClick={this.handleClick}>Upload</button>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default BattlePost
