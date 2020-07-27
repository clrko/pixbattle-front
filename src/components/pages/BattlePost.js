import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
import BattlePostTimer from './BattlePostTimer'
import DropDownPost from '../shared/DropDownPost'
import 'react-toastify/dist/ReactToastify.css'
import './BattlePost.css'
import './MyProfile.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

toast.configure()
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
        this.notifySuccess()
        this.setState({ hasPosted: true })
      })
      .catch(() => {
        this.notifyError()
      })
  }

  notifySuccess = () => {
    toast.success('Ta photo a bien été enregistrée !', {
      position: 'bottom-right',
      autoClose: 3000
    })
  }

  notifyError = () => {
    toast.error('Une erreur est survenue', {
      position: 'bottom-right',
      autoClose: 3000
    })
  }

  handleDeadlineReached = () => {
    const { user } = this.props
    const { history } = this.props
    const { battleId, groupId, hasPosted } = this.props.match.params
    if (hasPosted) {
      history.push(`/groups/${groupId}/battles/${battleId}/vote`)
      this.notifyTimerEndingVote()
    }
    history.push(`/${user.username}`)
    this.notifyTimerEnding()
  }

  notifyTimerEndingVote = () => {
    toast('Le temps est écoulé, à tes votes !', {
      position: 'bottom-right',
      autoClose: 3000
    })
  }

  notifyTimerEnding = () => {
    toast('Le temps est écoulé...', {
      position: 'bottom-right',
      autoClose: 3000
    })
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
          <input type='file' name='file' id='file' accept='image/png, image/jpeg' onChange={this.handleChange} />
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

export default connect(mapStateToProps)(BattlePost)
