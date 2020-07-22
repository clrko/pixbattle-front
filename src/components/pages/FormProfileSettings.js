import React from 'react'

import classNames from 'classnames'

import './FormRegistration.css'
import './FormLogin.css'

class FormProfileSettings extends React.Component {
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

  handleCheckbox = e => {
    this.setState({ isChecked: e.target.checked })
  }

  checkPassword = () => {
    const { password, checkPassword } = this.state
    return (password === checkPassword)
  }

  render () {
    const { password, checkPassword } = this.state
    const passwordError = password && checkPassword && !this.checkPassword()
    const passwordClass = classNames('LoginForm-input', { 'LoginForm-passwordError': passwordError })
    const emailError = !this.checkEmail()
    const emailClass = classNames('LoginForm-input', { 'LoginForm-passwordError': emailError })
    return (
      <form className='register-form from-PSW-AC'>
        <div className='login-inside LoginForm-div'>
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
            value={this.state.cuerrentPassword}
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
            className='LoginForm-deleteButton'
            type='button'
            value='Supprimer le compte'
            onClick={this.props.onClose}
          />
          <input
            className='LoginForm-validateButton'
            type='submit'
            value='Valider'
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    )
  }
}

export default FormProfileSettings
