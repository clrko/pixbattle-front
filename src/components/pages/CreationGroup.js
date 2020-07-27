import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { ADD_GROUP } from '../../store/action-types'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './CreationGroup.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}
class CreationGroup extends Component {
  state = {
    groupName: '',
    email: '',
    count: 1,
    allEmails: []
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAddEmail = e => {
    e.preventDefault()
    const { allEmails, email, count } = this.state
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      if (email === this.props.user.userEmail) {
        return this.notifyErrorOwnEmail()
      }
      if (allEmails.includes(email) === false) {
        const allEmailsTemp = allEmails
        const newEmail = email.toLowerCase()
        allEmailsTemp.push(newEmail)
        this.setState({
          allEmails: allEmailsTemp,
          count: count + 1,
          email: ''
        })
      } else if (allEmails.includes(email)) {
        this.notifyErrorAlreadyExisting()
      } else {
        this.notifyError()
      }
    } else {
      this.notifyErrorInvalidEmail()
    }
  }

  notifyErrorOwnEmail = () => {
    toast.error('Tu ne peux pas ajouter ton propre email', {
      position: 'bottom-right',
      autoClose: 3000
    })
  }

  notifyErrorAlreadyExisting = () => {
    toast.error('Tu as déjà invité cette personne', {
      position: 'bottom-right',
      autoClose: 3000
    })
  }

  notifyErrorInvalidEmail = () => {
    toast.error('Cet email est invalide', {
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

  handleRemoveEmail = e => {
    const { count } = this.state
    const email = e.target.name
    const allEmailsTemp = [...this.state.allEmails]
    this.setState({
      allEmails: allEmailsTemp.filter(em => em !== email),
      count: count - 1
    })
  }

  handleChangeSteps = e => {
    e.preventDefault()
    const { dispatch } = this.props
    const { allEmails, groupName } = this.state
    dispatch({ type: ADD_GROUP, emails: allEmails, groupName })
    return this.props.changeStep(e)
  }

  handleCancelCreation = e => {
    e.preventDefault()
    this.setState({
      groupName: '',
      email: '',
      count: 1,
      allEmails: []
    })
  }

  render () {
    const { groupName, email, count, allEmails } = this.state
    const { user } = this.props
    return (
      <div className='form-container'>
        <div className='group-container'>
          <p className='new-group-text'>Quel est le nom de ton groupe ?</p>
          <div className='container-add-group-name'>
            <input
              type='text'
              className='new-group-input'
              name='groupName'
              onChange={this.handleChange}
              placeholder='Nom du groupe'
              value={groupName}
              required
              minLength='5'
              maxLength='25'
            />
          </div>
          <p className={
            groupName.length < 5
              ? 'info'
              : 'info green'
          }
          >
            Entre 5 et 25 caractères
          </p>
        </div>
        <div className='group-container'>
          <p className='new-group-text'>Invite tes amis par mail</p>
          <form onSubmit={this.handleAddEmail} className='group-input'>
            <input
              type='email'
              className='new-group-input'
              onChange={this.handleChange}
              value={email}
              name='email'
              placeholder='Email'
            />
            <button
              type='submit'
              className='add-user'
              disabled={count >= 12}
            >
              <i className={
                count < 12
                  ? 'fas fa-plus-circle email-enabled'
                  : 'fas fa-plus-circle email-disabled'
              }
              />
            </button>
          </form>
          <p className={
            allEmails.length < 3 ? 'info' : 'info green'
          }
          >
            Entre 4 à 12 personnes
          </p>
        </div>
        <div className='group-bottom'>
          <ul className='emails-container'>
            <li className='emails-list'>{user.username}</li>
            {
              allEmails.map((email, i) => (
                <li
                  className='emails-list'
                  key={i}
                >
                  {email}
                  <input type='button' value='X' name={email} className='remove-email' onClick={this.handleRemoveEmail} />
                </li>
              ))
            }
          </ul>
          <p className='members'>
            Déjà {count} {count === 1 ? 'personne inscrite !' : 'personnes inscrites !'}
          </p>
        </div>
        <div className='bottom-new-group'>
          <NavLink to='/profile'>
            <button
              className='cancel-create-group'
              onClick={this.handleCancelCreation}
            >
              Annuler
            </button>
          </NavLink>
          <button
            type='submit'
            className={
              count > 3
                ? 'create-group create-enabled'
                : 'create-group create-disabled'
            }
            onClick={this.handleChangeSteps}
            disabled={count < 4}
          >
            Valider
          </button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(CreationGroup)
