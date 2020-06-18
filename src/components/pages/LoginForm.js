import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { LOGIN } from '../../store/action-types'
// import './LoginForm.css'
import './ZZZLoginForm.css'

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    isChecked: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckbox = e => {
    this.setState({ isChecked: e.target.checked })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { dispatch, history } = this.props
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth`, this.state)
      .then(res => {
        dispatch({ type: LOGIN, ...res.data })
        history.push('/battlecreationtheme') /* url à modifier pour mettre la page user profile */
      })
  }

  render () {
    const { email, password, isChecked } = this.state
    return (
      <form className='login-form'>
        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label'>Email</label>
          <input
            className='LoginForm-input'
            type='email' value={email}
            onChange={this.handleChange}
            name='email'
            required
          />
        </div>
        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label'>Mot de passe</label>
          <input
            className='LoginForm-input'
            type='password'
            value={password}
            onChange={this.handleChange}
            name='password'
            required
          />
        </div>
        <div className='LoginForm-checkboxAlign LoginForm-div'>
          <input
            className='LoginForm-checkbox'
            name='acceptedTerms'
            type='checkbox'
            checked={isChecked}
            onChange={this.handleCheckbox}
          />
          <label className='label-remember'>Se souvenir de moi</label>
        </div>
        <div className='LoginForm-div'>
          <input
            className='LoginForm-cancelButton'
            type='button'
            value='Annuler'
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

export default connect()(withRouter(LoginForm))
