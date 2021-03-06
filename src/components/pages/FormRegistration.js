import React from 'react'
import Cgu from './Cgu'
import Modal from '../shared/Modal'
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LOGIN } from '../../store/action-types'
import classNames from 'classnames'
import 'react-toastify/dist/ReactToastify.css'
import './FormLogin.css'
import './FormRegistration.css'

toast.configure()
class FormRegistration extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    invitationCode: null,
    checkPassword: '',
    isChecked: false,
    isOpen: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  checkEmail = () => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
      return (this.state.email)
    }
  }

  checkUsername = () => {
    const { username } = this.state
    if (/^[a-zA-Z0-9]+$/.test(this.state.username) && (username.length >= 3 && username.length <= 15)) {
      return (this.state.username)
    }
  }

  handleCheckbox = e => {
    this.setState({ isChecked: e.target.checked })
  }

  checkPassword = () => {
    const { password, checkPassword } = this.state
    return (password === checkPassword && password.length >= 6)
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.checkPassword() && this.checkEmail() && this.checkUsername()) {
      const { dispatch, history } = this.props
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/register`, this.state)
        .then(res => {
          this.notifySuccess()
          localStorage.setItem('token', res.headers['x-access-token'])
          dispatch({ type: LOGIN, ...res.data })
          history.push(`/${res.data.username}`)
          return this.props.onClose(e)
        })
        .catch(err => {
          if (err.response.status === 409) {
            this.notifyAlreadyRegister()
          } else {
            this.notifyError()
          }
        })
    } else {
      this.notifyError()
    }
  }

  notifySuccess = () => {
    toast.success('Bienvenue !', {
      position: 'bottom-right',
      autoClose: 3000
    })
  }

  notifyAlreadyRegister = () => {
    toast.error('Tu es déjà inscrit-e', {
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

  handleOpenModal = e => {
    e.preventDefault()
    this.setState({ isOpen: !this.state.isOpen })
  }

  componentDidMount () {
    if (this.props.invitationCode) {
      this.setState({ invitationCode: this.props.invitationCode })
    }
  }

  render () {
    const { password, checkPassword } = this.state
    const passwordError = password && checkPassword && !this.checkPassword()
    const emailError = !this.checkEmail()
    const usernameError = !this.checkUsername()
    const passwordClass = classNames('LoginForm-input', { 'LoginForm-passwordError': passwordError })
    const emailClass = classNames('LoginForm-input', { 'LoginForm-passwordError': emailError })
    const usernameClass = classNames('LoginForm-input', { 'LoginForm-passwordError': usernameError })
    return (
      <form className='register-form' onSubmit={this.handleSubmit}>
        <div className='login-inside LoginForm-div checkUsername-wrapper'>
          <label className='LoginForm-label'>Pseudo</label>
          <input
            className={usernameClass}
            type='text'
            value={this.state.username}
            onChange={this.handleChange}
            name='username'
            minLength='3'
            maxLength='15'
            required
          />
          {
            this.state.username.length > 0 && <div className='username-error-message'>Seuls les lettres et les chiffres sont autorisés</div>
          }
          <div className={this.state.username.length > 3 ? 'character-validation' : ''}>
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
          <div className={this.state.password.length > 5 ? 'character-validation' : ''}>
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
        <div className='LoginForm-checkboxAlign LoginForm-div'>
          <input
            className='LoginForm-checkbox'
            name='acceptedCGU'
            type='checkbox'
            checked={this.state.isChecked}
            onChange={this.handleCheckbox}
            required
          />
          <button className='label-UGC' onClick={this.handleOpenModal}>Conditions générales d'utilisations</button>
          <Modal isOpen={this.state.isOpen}>
            <Cgu onClose={this.handleOpenModal} />
          </Modal>
        </div>
        <div className='div-buttonValidateCancel'>
          <button
            className='FormLogin-button LoginForm-cancelButton'
            type='button'
            onClick={this.props.onClose}
          >
            Annuler
          </button>
          <button
            className='FormLogin-button LoginForm-validateButton'
            type='submit'
          >
            Valider
          </button>
        </div>
      </form>
    )
  }
}

export default connect()(withRouter(FormRegistration))
