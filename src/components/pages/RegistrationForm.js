import React from 'react'

import './LoginForm.css'

class RegistrationForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    checkPassword: '',
    isChecked: false
  }

  handleChange = e => {
    console.log('target', e.target.name)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckbox = e => {
    this.setState({ isChecked: e.target.checked })
  }

  handleCheck = () => {
    const { password, checkPassword } = this.state
    if (password !== checkPassword) {
      return 'Mauvais mot de passe'
    } else {
    }
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render () {
    return (
      <form className='login-form'>
        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label'>Pseudo</label>
          <input className='LoginForm-input' type='text' value={this.username} onChange={this.handleChange} name='username' required />
        </div>

        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label'>Email</label>
          <input className='LoginForm-input' type='email' value={this.email} onChange={this.handleChange} name='email' required />
        </div>

        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label'>Mot de passe</label>
          <input className='LoginForm-input' type='password' value={this.password} onChange={this.handleCheck} name='password' required />
        </div>

        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label'>Confirmer le mot de passe</label>
          <input className='LoginForm-input' type='password' value={this.checkPassword} onChange={this.handleCheck} name='checkPassword' required />
        </div>

        <div className='LoginForm-checkboxAlign1 LoginForm-div'>
          <input className='LoginForm-checkbox' name='acceptedCGU' type='checkbox' checked={this.isChecked} onChange={this.handleCheckbox} required />
          <label className='label-UGC'>Conditions générales d'utilisations</label>
        </div>

        <div>
          <input className='LoginForm-boutonAnnuler' type='button' value='Annuler' />
          <input className='LoginForm-boutonValider' type='submit' value='Valider' onClick={this.handleSubmit} />
        </div>
      </form>
    )
  }
}

export default RegistrationForm
