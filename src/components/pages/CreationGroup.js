import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import { ADD_GROUP } from '../../store/action-types'
import './CreationGroup.css'

class CreationGroup extends Component {
  state = {
    groupName: '',
    isGroupName: false,
    email: '',
    count: 1,
    allEmails: [],
    contentModal: 'newBattleTheme'
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChooseName = e => {
    e.preventDefault()
    const { groupName } = this.state
    if (this.state.groupName.length > 0) {
      axios
        .put(`${process.env.REACT_APP_SERVER_URL}/group/${this.props.params}`,
          {
            headers: {
              'x-access-token': localStorage.getItem('token')
            },
            groupName
          })
        .then(res => {
          this.setState({ isGroupName: true })
        })
    }
  }

  handleAddEmail = e => {
    e.preventDefault()
    const { allEmails, email, count } = this.state
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
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
        alert('Tu as déjà invité cette personne')
      } else {
        alert('Quelque chose s\'est mal passé')
      }
    } else {
      alert('Cet email est invalide')
    }
  }

  handleRemoveEmail = email => {
    this.setState(({ allEmails, count }) => ({
      allEmails: allEmails.filter(em => em !== email),
      count: count - 1
    }))
  }

  handleChangeSteps = e => {
    e.preventDefault()
    const { allEmails } = this.state
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/group/${this.props.params}`,
        {
          headers: {
            'x-access-token': localStorage.getItem('token')
          },
          allEmails
        })
      .then(res => {
        console.log(res.data) /* Il faut renvoyer une notification à l'utilisateur soit les emails soit group créé */
      })
    const currentGroupId = { groupId: this.props.params }
    const { dispatch } = this.props
    dispatch({ type: ADD_GROUP, currentGroupId })
    return this.props.changeStep(e)
  }

  handleCancelCreation = e => {
    e.preventDefault()
    this.setState({
      groupName: '',
      isGroupName: false,
      email: '',
      count: 1,
      allEmails: []
    })
  }

  render () {
    const { groupName, email, count, allEmails, isGroupName } = this.state
    return (
      <form className='form-container'>
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
              disabled={isGroupName}
            />
            {
              !isGroupName &&
                <button
                  className='button-add-group-name'
                  onClick={this.handleChooseName}
                >
                Valider
                </button>
            }
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
        <div style={!isGroupName ? { display: 'none' } : { display: 'inline' }}>
          <div className='group-container'>
            <p className='new-group-text'>Invite tes amis par mail</p>
            <div className='group-input'>
              <input
                type='text'
                className='new-group-input'
                onChange={this.handleChange}
                value={email}
                name='email'
                placeholder='Email'
              />
              <button
                type='submit'
                className='add-user'
                onClick={this.handleAddEmail}
                disabled={count >= 12}
              >
                <i className={
                  count < 12
                    ? 'fas fa-plus-circle email-abled'
                    : 'fas fa-plus-circle email-disabled'
                }
                />
              </button>
            </div>
            <p className={
              allEmails.length < 3 ? 'info' : 'info green'
            }
            >
              Entre 4 à 12 personnes
            </p>
          </div>
          <div className='group-bottom'>
            <ul className='emails-container'>
              <li className='emails-list'>current_username</li>
              {
                allEmails.map((email, i) => (
                  <li
                    className='emails-list'
                    key={i}
                  >
                    {email}
                    <button className='remove-email' onClick={() => this.handleRemoveEmail(email)}>
                      <i className='fas fa-times' />
                    </button>
                  </li>
                ))
              }
            </ul>
            <p className='members'>
              Déjà {count} {count === 1 ? 'personne inscrite !' : 'personnes inscrites !'}
            </p>
          </div>
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
                ? 'create-group create-abled'
                : 'create-group create-disabled'
            }
            onClick={this.handleChangeSteps}
            disabled={count < 3}
          >
            Valider
          </button>
        </div>
      </form>
    )
  }
}

export default connect()(CreationGroup)
