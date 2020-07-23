import React from 'react'
import axios from 'axios'
import BattlePostTimer from './BattlePostTimer'
import CloudUpload from '../../asset/pictures/cloud-computing.png'
import DropDownPost from '../shared/DropDownPost'
import './BattlePost.css'
import './MyProfile.css'

class BattlePost extends React.Component {
  state = {
    previewPicture: CloudUpload,
    selectedFile: CloudUpload,
    themeName: '',
    rulesNames: [],
    deadline: ''
  }

  componentDidMount () {
    this.handleInfosBattle()
  }

  handleInfosBattle = () => {
    const { battleId, groupId } = this.props.match.params
    const allRulesNames = []
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/battle-post/${groupId}/${battleId}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      ).then(res => {
        allRulesNames.push(res.data.battleInfos.map(info => { return ' - ' + info.rule_name }))
        this.setState({
          themeName: res.data.battleInfos[0].theme_name,
          rulesNames: allRulesNames,
          deadline: res.data.battleInfos[0].deadline.replace('T', ' ').substr(0, 19)
        })
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

  handleDeadlineReached = () => {
    const { history } = this.props
    const { battleId, groupId } = this.props.match.params
    history.push(`/groups/${groupId}/battles/${battleId}/vote`)
  }

  render () {
    const { themeName, deadline, rulesNames, selectedFile } = this.state
    return (
      <div className='background-MyProfile'>
        <DropDownPost />
        <div className='window-MyProfile battle-post-container'>
          <BattlePostTimer onDeadlineReached={this.handleDeadlineReached} deadline={deadline} />
          <div className='battlePost-info-div'>
            <p className='battlePost-info'>Thème : <span className='battlePost-span'>{themeName}</span></p>
            <hr className='battlePost-line' />
            <p className='battlePost-info'>Contraintes :
              {
                rulesNames.map((rule, i) => <span key={i} className='battlePost-span'>{rule}</span>)
              }
            </p>
            <hr className='battlePost-line' />
          </div>
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
