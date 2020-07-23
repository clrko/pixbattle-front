import React, { Component } from 'react'
import DropDownSettings from '../shared/DropDownSettings'
import './MySettings.css'
import axios from 'axios'

class MySettingsAvatar extends Component {
  state = {
    modifPseudo: '',
    avatars: []
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
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
    const { avatars } = this.state
    const card = avatars.map(function (avatar, ind) {
      return (
        <div key={ind}>
          <img className='card-avatar-settings' src={avatar.avatar_url} alt={avatar.avatar_url} />
        </div>
      )
    })

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
                value={this.state.modifPseudo}
                onChange={this.handleChange}
                name='modifPseudo'
                minLength='3'
                maxLength='15'
              />
              <div className='LoginForm-label AC-MA-margin'>Modifier ton avatar</div>
              <div className='settings-avatar-page'>
                {card}
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
