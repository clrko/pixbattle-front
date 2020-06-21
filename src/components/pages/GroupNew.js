import React, { Component } from 'react'
import axios from 'axios'
import './GroupNew.css'

class GroupNew extends Component {
  state = {
    groupName: '',
    email: '',
    count: 1,
    allEmails: [],
    contentModal: 'newBattleTheme'
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAddEmail = (e) => {
    e.preventDefault()
    const { allEmails, email, count } = this.state
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      if (allEmails.includes(email) === false) {
        const allEmailsTemp = allEmails
        const newEmail = email
        allEmailsTemp.push(newEmail)
        this.setState({
          allEmails: allEmailsTemp,
          count: count + 1,
          email: ''
        })
        console.log(allEmails)
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
      allEmails: allEmails.filter(e => e !== email),
      count: count - 1
    }))
  }

  handleCreateGroup = (e) => {
    e.preventDefault()
    const { allEmails, groupName } = this.state
    console.log(allEmails, groupName)
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/group/${this.props.match.params.id}`,
        {
          headers: {
            'x-access-token': localStorage.getItem('token')
          },
          allEmails,
          groupName
        })
      .then(res => {
        console.log(res.data)
      })
  }

  render () {
    const { groupName, email, count, allEmails } = this.state
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
              value={groupName}
              required
              minLength='5'
              maxLength='25'
            />
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
            <div className='group-emails'>
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
            <div className='bottom-new-group'>
              <p className='members'>
                Déjà {count} {count === 1 ? 'personne inscrite !' : 'personnes inscrites !'}
              </p>
              <button
                type='submit'
                className={
                  count > 3
                    ? 'create-group create-abled'
                    : 'create-group create-disabled'
                }
                onClick={this.handleCreateGroup}
                disabled={count < 3}
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
