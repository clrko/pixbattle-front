import React from 'react'
import axios from 'axios'
import BattlePostTimer from './BattlePostTimer'
import CloudUpload from '../../asset/pictures/cloud-computing.png'
import DropDown from '../shared/DropDown'
import './BattlePost.css'
import './MyProfile.css'

class BattlePost extends React.Component {
  state = {
    previewPicture: CloudUpload,
    selectedFile: CloudUpload,
    battlePostInfo: '',
    deadline: ''
  }

  componentDidMount () {
    this.handleInfosBattle()
  }

  handleInfosBattle = () => {
    const { battleId, groupId } = this.props.match.params
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/battle-post/${groupId}/${battleId}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      ).then(res => this.setState({
        battlePostInfo: res.data.battleInfos[0],
        deadline: res.data.battleInfos[0].deadline.replace('T', ' ').substr(0, 19)
      }))
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
    axios.post(`${process.env.REACT_APP_SERVER_URL}/battle/battle-post/addpicture`, data,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res => {
        alert('Bravo! Ta photo a bien été postée')
      })
      .catch(() => {
        alert("Une erreur s'est produite pendant le téléchargement ! Réessaye s'il te plait.")
      })
  }

  render () {
    const { battlePostInfo, deadline, selectedFile } = this.state
    const { battleId, groupId } = this.props.match.params
    return (
      <div className='background-MyProfile'>
        <DropDown />
        <div className='window-MyProfile battle-post-container'>
          <div className='battlePost-info-div'>
            <div className='battle-post-infos'>
              <h4 className='battlePost-rules'>Contraintes:</h4>
              <p className='battlePost-info'>{battlePostInfo.rule_name}</p>
            </div>
          </div>
          <BattlePostTimer deadline={deadline} groupId={groupId} battleId={battleId} />
          <div>
            <div className='countdown' />
            <img className='picture' src={selectedFile} alt='preview' />
            <input type='file' name='file' className='choose-file-btn' onChange={this.handleChange} />
            <button className='upload-ButtonPostpicture' type='button' onClick={this.handleClick}>Upload</button>
          </div>
        </div>
      </div>
    )
  }
}

export default BattlePost
