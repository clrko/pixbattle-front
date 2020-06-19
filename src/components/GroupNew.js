import React, { Component } from 'react'
import axios from 'axios'

import './GroupNew.css'

class GroupNew extends Component {
  state = {
    groupName: '',
    email: '',
    count: 1,
    allEmails: []
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAddEmail = (e) => {
    e.preventDefault()
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
      if (this.state.allEmails.includes(this.state.email) === false) {
        const allEmailsTemp = this.state.allEmails
        const newEmail = this.state.email
        allEmailsTemp.push(newEmail)
        this.setState({
          allEmails: allEmailsTemp,
          count: this.state.count + 1,
          email: ''
        })
      } else if (this.state.allEmails.includes(this.state.email)) {
        alert('Tu as déjà invité cette personne')
      } else {
        alert('Quelque chose s\'est mal passé')
      }
    } else {
      alert('Cet email est invalide')
    }
  }

  handleCreateGroup = (e) => {
    e.preventDefault()
    console.log(this.state.groupName)
    const { allEmails, groupName } = this.state
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}group-creation`, allEmails.join(), groupName)
      .then(res => {
        console.log(res)
      })
  }

  render () {
    return (
      <div className='NewGroup'>
        <form className='form-container'>
          <div className='group-container'>
            <p className='new-group-text'>Quel est le nom de ton groupe ?</p>
            <input
              type='text'
              className='new-group-input'
              name='groupName'
              onChange={this.handleChange}
              placeholder='Nom du groupe'
              value={this.state.groupName}
              required
              minLength='5'
              maxLength='25'
            />
            <p className={
              this.state.groupName.length < 5
                ? 'info'
                : 'info green'
            }
            >
              Entre 5 et 25 caractères
            </p>
          </div>
          <div className='group-container'>
            <p className='new-group-text'>Invite tes amis par mail</p>
            <div className='group-emails'>
              <div className='group-input'>
                <input
                  type='text'
                  className='new-group-input'
                  onChange={this.handleChange}
                  value={this.state.email}
                  name='email'
                  placeholder='Email'
                />
                <button
                  type='submit'
                  className='add-user'
                  onClick={this.handleAddEmail}
                  disabled={this.state.count >= 12}
                >
                  <i className={
                    this.state.count < 12
                      ? 'fas fa-plus-circle email-abled'
                      : 'fas fa-plus-circle email-disabled'
                  }
                  />
                </button>
              </div>
              <p className={
                this.state.allEmails.length < 3 ? 'info' : 'info green'
              }
              >
                Entre 4 à 12 personnes
              </p>
            </div>
            <ul className='emails-container'>
              <li className='emails-list'>current_username</li>
              {
                this.state.allEmails.map((e, i) => (
                  <li
                    className='emails-list'
                    key={i}
                  >
                    {e}
                  </li>
                ))
              }
            </ul>
            <div className='bottom-new-group'>
              <p className='members'>
                Déjà {this.state.count} {this.state.count === 1 ? 'personne inscrite !' : 'personnes inscrites !'}
              </p>
              <button
                type='submit'
                className={
                  this.state.count > 3
                    ? 'create-group create-abled'
                    : 'create-group create-disabled'
                }
                onClick={this.handleCreateGroup}
                disabled={this.state.count < 4}
              >
                Créé ta battle !
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default GroupNew
