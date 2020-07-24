import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LOGIN } from '../../store/action-types'
import 'react-toastify/dist/ReactToastify.css'
import './FormLogin.css'

toast.configure()

class FormLogin extends React.Component {
  state = {
    email: '',
    password: '',
    invitationCode: null,
    isChecked: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckbox = e => {
    this.setState({ isChecked: e.target.checked })
  }

  checkEmail = () => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
      return (this.state.email)
    }
  }

  handleSubmit = e => {
    const { password } = this.state
    if (this.checkEmail() && password) {
      e.preventDefault()
      const { dispatch, history } = this.props
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/auth`, this.state)
        .then(res => {
          this.notifySuccess()
          localStorage.setItem('token', res.headers['x-access-token'])
          dispatch({ type: LOGIN, ...res.data })
          history.push(`/${res.data.username}`)
          return this.props.onClose(e)
        })
        .catch(err => {
          if (err) {
            return this.notifyError()
          }
        })
    } else {
      this.notifyError()
    }
  }

  notifySuccess = () => {
    toast.success('Bienvenue !', {
      position: 'bottom-right',
      autoClose: 3000,
      draggable: true
    })
  }

  notifyError = () => {
    toast.error('L\'email et/ou le mot de passe sont incorrects', {
      position: 'bottom-right',
      autoClose: 3000,
      draggable: true
    })
  }

  componentDidMount () {
    if (this.props.invitationCode) {
      this.setState({ invitationCode: this.props.invitationCode })
    }
  }

  render () {
    const { email, password, isChecked } = this.state
    return (
      <form className='login-form'>
        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label marginLoginForm-label'>Email</label>
          <input
            className='LoginForm-input'
            type='email' value={email}
            onChange={this.handleChange}
            name='email'
            required
          />
        </div>
        <div className='login-inside LoginForm-div'>
          <label className='LoginForm-label marginLoginForm-label'>Mot de passe</label>
          <input
            className='LoginForm-input'
            type='password'
            value={password}
            onChange={this.handleChange}
            name='password'
            required
          />
        </div>
        <div className='LoginForm-checkboxAlign LoginForm-div div-label-remember'>
          <input
            className='LoginForm-checkbox'
            name='acceptedTerms'
            type='checkbox'
            checked={isChecked}
            onChange={this.handleCheckbox}
          />
          <label className='label-remember'>Se souvenir de moi</label>
        </div>
        <div className='div-buttonFormLogin'>
          <input
            className='LoginForm-cancelButton'
            type='button'
            value='Annuler'
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

export default connect()(withRouter(FormLogin))
