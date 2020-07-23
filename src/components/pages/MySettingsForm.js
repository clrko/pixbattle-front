import React from 'react'
import axios from 'axios'
import classNames from 'classnames'

class MySettingsForm extends React.Component {
  state = {
    currentEmail: '',
    newEmail: '',
    currentPassword: '',
    newPassword: '',
    confirmePassword: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  checkEmail = () => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
      return (this.state.email)
    }
  }

  checkPassword = () => {
    const { password, checkPassword } = this.state
    return (password === checkPassword)
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.checkPassword() && this.checkEmail()) {
      // const { dispatch, history } = this.props
      axios
        .put(`${process.env.REACT_APP_SERVER_URL}/profile/settings`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
        .then(res => console.log(res.data))
    } else {
      alert('une erreur est survenue')
    }
  }

  handleDeleteAccount = e => {
    e.preventDefault()
    if (window.confirm('Ce choix est définitif et toutes des données seront perdues. Es-tu sûr-e de vouloir supprimer ton compte ?')) {
      axios
        .delete(`${process.env.REACT_APP_SERVER_URL}/profile`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
        .then(res => console.log(res))
    }
  }

  render () {
    const { password, checkPassword } = this.state
    const passwordError = password && checkPassword && !this.checkPassword()
    const passwordClass = classNames('LoginForm-input', { 'LoginForm-passwordError': passwordError })
    const emailError = !this.checkEmail()
    const emailClass = classNames('LoginForm-input', { 'LoginForm-passwordError': emailError })
    return (
      <form className='register-form'>
        <div className='login-inside LoginForm-div settings-form'>
          <label className='LoginForm-label'>Email actuel</label>
          <input
            className={emailClass}
            type='email'
            value={this.state.currentEmail}
            onChange={this.handleChange}
            name='currentEmail'
            required
          />
        </div>
        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label'>Nouvel email</label>
          <input
            className={emailClass}
            type='email'
            value={this.state.newEmail}
            onChange={this.handleChange}
            name='newEmail'
            required
          />
        </div>
        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label'>Mot de passe actuel</label>
          <input
            className={passwordClass}
            type='password'
            value={this.state.currentPassword}
            onChange={this.handleChange}
            name='currentPassword'
            minLength='6'
            maxLength='15'
            required
          />
          <div className={this.state.currentPassword.length > 5 ? 'character-validation' : ''}>
            <p className='character-validation-p'>Entre 6 et 15 caractères</p>
          </div>
        </div>
        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label'>Nouveau mot de passe</label>
          <input
            className={passwordClass}
            type='password'
            value={this.state.newPassword}
            onChange={this.handleChange}
            name='newPassword'
            minLength='6'
            maxLength='15'
            required
          />
          <div className={this.state.newPassword.length > 5 ? 'character-validation' : ''}>
            <p className='character-validation-p'>Entre 6 et 15 caractères</p>
          </div>
        </div>
        <div className='login-inside LoginForm-div CheckPassword-wrapper'>
          <label className='LoginForm-label'>Confirmer le mot de passe</label>
          <input
            className={passwordClass}
            type='password'
            value={this.state.checkPassword}
            onChange={this.handleChange}
            name='checkPassword'
            minLength='6'
            maxLength='15'
            required
          />
          <div className='password-error-message'>Les mots de passe de correspondent pas</div>
        </div>
        <div>
          <input
            className='delete-account-btn'
            type='button'
            value='Supprimer le compte'
            onClick={this.handleDeleteAccount}
          />
          <input
            className='LoginForm-validateButton settings-btn'
            type='submit'
            value='Valider'
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    )
  }
}

export default MySettingsForm
