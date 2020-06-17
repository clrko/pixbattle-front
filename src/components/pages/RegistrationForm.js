import React from 'react'
import classNames from 'classnames'
import './LoginForm.css'
import './RegistrationForm.css'

class RegistrationForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    checkPassword: '',
    isChecked: false
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

  handleSubmit = e => {
    e.preventDefault()
    if (!this.checkPassword()) {
      // alert('Mauvais mot de passe')
    } else { // Appel Axios
    }
  }

  render () {
    const { password, checkPassword } = this.state
    const passwordError = password && checkPassword && !this.checkPassword()
    const passwordClass = classNames('LoginForm-input', { 'LoginForm-passwordError': passwordError })
    const emailError = !this.checkEmail()
    const emailClass = classNames('LoginForm-input', { 'LoginForm-passwordError': emailError })
    return (
      <form className='login-form'>
        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label'>Pseudo</label>
          <input
            className='LoginForm-input'
            type='text'
            value={this.state.username}
            onChange={this.handleChange}
            name='username'
            minLength='3'
            maxLength='15'
            required
          />
          <div className={this.state.username.length > 3 && 'character-validation'}>
            <p className='character-validation-p'>Entre 3 et 15 caractères</p>
          </div>
        </div>

        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label'>Email</label>
          <input
            className={emailClass}
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            name='email'
            required
          />
        </div>

        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label'>Mot de passe</label>
          <input
            className={passwordClass}
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            name='password'
            minLength='6'
            maxLength='15'
            required
          />
          <div className={this.state.password.length > 5 && 'character-validation'}>
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

        <div className='LoginForm-checkboxAlign1 LoginForm-div'>
          <input
            className='LoginForm-checkbox'
            name='acceptedCGU'
            type='checkbox'
            checked={this.state.isChecked}
            onChange={this.handleCheckbox}
            required
          />
          <label className='label-UGC'>Conditions générales d'utilisations</label>
        </div>

        <div>
          <input
            className='LoginForm-boutonAnnuler'
            type='button'
            value='Annuler'
          />
          <input
            className='LoginForm-boutonValider'
            type='submit'
            value='Valider'
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    )
  }
}

export default RegistrationForm
