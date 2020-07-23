import React, { Component } from 'react'
import DropDownSettings from '../shared/DropDownSettings'
import axios from 'axios'
import './MySettings.css'

class MySettingsAvatar extends Component {
  state = {
    newUsername: '',
    avatars: [],
    selectedAvatar: 0
  }

  handleChangeUsername = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChangeAvatar = e => {
    this.setState({ [e.target.name]: e.target.id })
  }

  checkUsername = () => {
    if (/^[a-zA-Z0-9]+$/.test(this.state.newUsername)) {
      return (this.state.newUsername)
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { newUsername, selectedAvatar } = this.state
    if ((newUsername && this.checkUsername()) || selectedAvatar) {
      axios
        .put(`${process.env.REACT_APP_SERVER_URL}/profile/settings/informations`,
          { newUsername, selectedAvatar },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
        .then(res => {
          alert('Les modifications ont bien été enregistrées')
          // mettre à jour le store
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
      .then(res => this.setState({ avatars: res.data }))
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
                          checked={selectedAvatar.avatar_id === avatar.avatar_id}
                          onChange={this.handleChangeAvatar}
                          id={avatar.avatar_id}
                        />
                        <img className='card-avatar-settings' src={avatar.avatar_url} alt={avatar.avatar_url} />
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

export default MySettingsAvatar
