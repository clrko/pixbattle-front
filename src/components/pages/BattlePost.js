import React from 'react'
import axios from 'axios'
import BattlePostTimer from './BattlePostTimer'
import DropDownPost from '../shared/DropDownPost'
import './BattlePost.css'
import './MyProfile.css'

class BattlePost extends React.Component {
  state = {
    selectedFile: '',
    themeName: '',
    rulesNames: [],
    deadline: '',
    hasPosted: false
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
        const { battleInfos, photoUrl } = res.data
        allRulesNames.push(battleInfos.map(info => { return ' - ' + info.rule_name }))
        this.setState({
          themeName: battleInfos[0].theme_name,
          rulesNames: allRulesNames,
          deadline: battleInfos[0].deadline.replace('T', ' ').substr(0, 19),
          postedImg: photoUrl && `${process.env.REACT_APP_SERVER_URL}/${photoUrl}`,
          hasPosted: !!photoUrl
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
    const { battleId, groupId } = this.props.match.params
    data.append('battleId', battleId)
    data.append('groupId', groupId)
    axios.post(`${process.env.REACT_APP_SERVER_URL}/battle/battle-post/addpicture`, data,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res => {
        this.setState({ hasPosted: true })
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

  getPicturePostForm = () => {
    const { postedImg, hasPosted, selectedFile } = this.state
    if (hasPosted) {
      return (
        <div>
          <img className='picture' src={postedImg || selectedFile} alt='posted image' />
          <p>Ta photo a bien été enregistrée !</p>
        </div>
      )
    }
    const preview = selectedFile
      ? <img className='picture' src={selectedFile} alt='preview' />
      : (
        <div className='picture'>
          <i className='far fa-image' />
        </div>
      )
    return (
      <>
        {preview}
        <div className='upload-file'>
          <input type='file' name='file' id='file' onChange={this.handleChange} />
          <label for='file' className='choose-file-btn'>Choisis une photo</label>
          <button className='upload-ButtonPostpicture' type='button' onClick={this.handleClick}>Upload</button>
        </div>
      </>
    )
  }

  render () {
    const { themeName, deadline, rulesNames } = this.state
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
            {
              this.getPicturePostForm()
            }
          </div>
        </div>
      </div>
    )
  }
}

export default BattlePost
