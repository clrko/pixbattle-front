import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
import ListMembers from '../shared/ListMembers'
import PageHeader from '../shared/PageHeader'
import 'react-toastify/dist/ReactToastify.css'
import './MySettingsGroups.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

const MySettingsGroups = ({ user, match, location }) => {
  const [groupName, setGroupName] = useState('')
  const [listGroupMembers, setListGroupMembers] = useState([])
  const [email, setEmail] = useState('')
  const [count, setCount] = useState(0)
  const [allEmails, setAllEmails] = useState([])

  const handleGroupNameChange = e => setGroupName(e.target.value)

  const handleChosenName = e => {
    e.preventDefault()
    if (groupName.length > 0) {
      axios
        .put(`${process.env.REACT_APP_SERVER_URL}/group/update/${match.params.groupId}`,
          { groupName },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
        .then(res => {
          notifySuccessGroupName()
        })
    }
  }

  const notifySuccessGroupName = () => {
    toast.success('Les modifications ont bien été enregistrées', {
      position: 'bottom-right',
      autoClose: 3000
    })
  }

  const handleEmailChange = e => setEmail(e.target.value)

  const handleAddEmail = e => {
    e.preventDefault()
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      if (email === user.userEmail) notifyErrorOwnEmail()
      if (listGroupMembers.map(member => Object.values(member).includes(email)) && allEmails.includes(email) === false) {
        const allEmailsTemp = [...allEmails]
        const newEmail = email.toLowerCase()
        allEmailsTemp.push(newEmail)
        setAllEmails(allEmailsTemp)
        setCount(count + 1)
        setEmail('')
      } else if (allEmails.includes(email)) {
        notifyErrorAlreadyExisting()
      } else if (listGroupMembers.map(member => Object.values(member).includes(email))) {
        notifyError()
      }
    } else {
      notifyErrorInvalidEmail()
    }
  }

  const notifyErrorOwnEmail = () => {
    toast.error('Tu ne peux pas ajouter ton propre email', {
      position: 'bottom-right',
      autoClose: 3000
    })
  }

  const notifyErrorAlreadyExisting = () => {
    toast.error('Tu as déjà invité cette personne', {
      position: 'bottom-right',
      autoClose: 3000
    })
  }

  const notifyErrorInvalidEmail = () => {
    toast.error('Cet email est invalide', {
      position: 'bottom-right',
      autoClose: 3000
    })
  }

  const notifyError = () => {
    toast.error('Ce membre fait déjà parti du groupe', {
      position: 'bottom-right',
      autoClose: 3000
    })
  }

  const handleRemoveEmail = e => {
    const email = e.target.name
    const allEmailsTemp = [...allEmails]
    setAllEmails(allEmailsTemp.filter(em => em !== email))
    setCount(count - 1)
  }

  const handleValidateNewMembers = e => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/group/add-members/${match.params.groupId}`,
        { allEmails },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => {
        notifySuccess()
      })
  }

  const notifySuccess = () => {
    toast.success('Les invitations ont été envoyées', {
      position: 'bottom-right',
      autoClose: 3000
    })
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/members/group/${match.params.groupId}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => {
        setListGroupMembers(res.data)
        setCount(res.data.length)
        setGroupName(location.state.groupName)
      })
  }, [])

  return (
    <div>
      <PageHeader pageTitle='Paramètres du groupe' />
      <div className='background-GroupSettings'>
        <form className='setting-group-container'>
          <p className='modified-group-text'>Modifier le nom du groupe</p>
          <div className='container-modified-group-name' style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div>
              <input
                type='text'
                className='modified-group-input'
                name='groupName'
                onChange={handleGroupNameChange}
                placeholder={location.state.groupName}
                value={groupName}
                required
                minLength='5'
                maxLength='25'
              />
              <p className={groupName.length < 5 ? 'infoSettings' : 'infoSettings green'}>Entre 5 et 25 caractères</p>
            </div>
            <button className='button-validate-modification' onClick={handleChosenName}>Valider</button>
          </div>
        </form>
        <div className='setting-group-container participants'>
          <p className='modified-group-text'>Liste des membres</p>
          <ListMembers listParticipants={listGroupMembers} />
        </div>
        <form onSubmit={handleAddEmail} className='setting-group-container'>
          <p className='modified-group-text'>Ajoute un nouveau membre</p>
          <div className='container-modified-group-name'>
            <input
              type='text'
              className='modified-group-input'
              onChange={handleEmailChange}
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
                  ? 'fas fa-plus-circle email-enabled settings-btn'
                  : 'fas fa-plus-circle email-disabled settings-btn'
              }
              />
            </button>
          </div>
          {count < 12 ? <p className={allEmails.length < 3 ? 'infoSettings' : 'infoSettings green'}>Entre 4 à 12 personnes</p> : <p className='infoSettings'>Le groupe est complet</p>}
        </form>
        <div className='settings-group-bottom'>
          <ul className='settings-emails-container'>
            {
              allEmails.map((email, i) => (
                <li className='settings-emails-list' key={i}>
                  {email}
                  <input type='button' value='X' name={email} className='settings-remove-email' onClick={handleRemoveEmail} />
                </li>
              ))
            }
          </ul>
          <button className='button-validate-modification' onClick={handleValidateNewMembers}>Valider</button>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(MySettingsGroups)
