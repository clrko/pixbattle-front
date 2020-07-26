import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LOGIN } from '../../store/action-types'
import DropDownSettings from '../shared/DropDownSettings'
import axios from 'axios'
import classnames from 'classnames'
import './MySettings.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

class MySettingsAvatar extends Component {
  constructor (props) {
    super(props)
    const { user } = this.props
    const newUsername = user ? user.username : ''
    this.state = {
      newUsername,
      avatars: [],
      selectedAvatar: 0,
      selectedAvatarUrl: ''
    }
  }

  handleChangeUsername = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChangeAvatar = e => {
    this.setState({
      selectedAvatar: Number(e.target.id),
      selectedAvatarUrl: e.target.value
    })
  }

  checkUsername = () => {
    if (/^[a-zA-Z0-9]+$/.test(this.state.newUsername)) {
      return (this.state.newUsername)
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { newUsername, selectedAvatar, selectedAvatarUrl } = this.state
    const { dispatch } = this.props
    if ((newUsername && this.checkUsername()) || selectedAvatar) {
      axios
        .put(`${process.env.REACT_APP_SERVER_URL}/profile/settings/informations`,
          { newUsername, selectedAvatar, selectedAvatarUrl },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
        .then(res => {
          const token = res.headers['x-access-token']
          localStorage.setItem('token', token)
          dispatch({ type: LOGIN, ...res.data })
          alert('Les modifications ont bien été enregistrées')
          this.setState({ newUsername: '' })
        })
    } else {
      alert('Seuls les lettres et les chiffres sont autorisés')
    }
  }

  componentDidMount () {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/profile/avatars`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => {
        const { user } = this.props
        const avatarUrl = user.avatar
        const avatar = res.data.find(avatar => avatar.avatar_url === avatarUrl)
        this.setState({
          avatars: res.data,
          selectedAvatar: avatar.avatar_id,
          selectedAvatarUrl: avatarUrl
        })
      })
  }

  render () {
    const { avatars, selectedAvatar, newUsername } = this.state

    return (
      <div>
        <DropDownSettings />
        <div className='background-PageProfileSettings'>
          <form className='register-form'>
            <div className='login-inside LoginForm-div  settings-form'>
              <label className='LoginForm-label'>Modifier ton pseudo</label>
              <input
                className='LoginForm-input'
                type='text'
                value={newUsername}
                onChange={this.handleChangeUsername}
                name='newUsername'
                minLength='3'
                maxLength='15'
              />
              <div className={newUsername.length > 3 ? 'character-validation' : ''}>
                <p className='character-validation-p'>Entre 3 et 15 caractères</p>
              </div>
              <div className='LoginForm-label AC-MA-margin'>Modifier ton avatar</div>
              <div className='settings-avatar-page'>
                {
                  avatars.map((avatar, ind) => (
                    <div key={ind}>
                      <label htmlFor={avatar.avatar_id}>
                        <input
                          className='avatar-btn-settings'
                          type='radio'
                          name='selectedAvatar'
                          value={avatar.avatar_url}
                          checked={selectedAvatar === avatar.avatar_id}
                          onChange={this.handleChangeAvatar}
                          id={avatar.avatar_id}
                        />
                        <img
                          className={classnames('card-avatar-settings', {
                            'card-avatar-settings-selected': selectedAvatar === avatar.avatar_id
                          })}
                          src={avatar.avatar_url}
                          alt={avatar.avatar_url}
                        />
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>
            <div>
              <input
                className='LoginForm-validateButton AC-VB-Margin'
                type='submit'
                value='Valider'
                onClick={this.handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(MySettingsAvatar)
