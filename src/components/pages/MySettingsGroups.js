import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ListMembers from '../shared/ListMembers'
import './MySettingsGroups.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

const MySettingsGroups = ({ user, match }) => {
  const [groupName, setGroupName] = useState('')
  const [isGroupName, setIsGroupName] = useState(false)
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
          setIsGroupName(true)
          window.location.reload(true)
          /* ajoter toaster pour dire que le nom a été changé */
        })
    }
  }

  const handleEmailChange = e => setEmail(e.target.value)

  const handleAddEmail = e => {
    e.preventDefault()
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      if (email === user.userEmail) alert('Tu ne peux pas ajouter ton propre email')
      if (count === 12) alert('Il n\'y a plus de place dans ton groupe')
      if (listGroupMembers.map(member => Object.values(member).includes(email)) && allEmails.includes(email) === false) {
        const allEmailsTemp = [...allEmails]
        const newEmail = email.toLowerCase()
        allEmailsTemp.push(newEmail)
        setAllEmails(allEmailsTemp)
        setCount(count + 1)
        setEmail('')
      } else if (allEmails.includes(email)) {
        alert('Tu as déjà invité cette personne')
      } else if (listGroupMembers.map(member => Object.values(member).includes(email))) {
        alert('Ce membre fait déjà parti du groupe')
      }
    } else {
      alert('Cet email est invalide')
    }
  }

  const handleRemoveEmail = e => {
    const email = e.target.name
    const allEmailsTemp = [...allEmails]
    setAllEmails(allEmailsTemp.filter(em => em !== email))
    setCount(count - 1)
  }

  const handleValidateNewMembers = e => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/group/${match.params.groupId}`,
        { groupName },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => {
        console.log('Les invitations ont été envoyées')
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
      })
  }, [])

  return (
    <div className='background-GroupSettings'>
      <form className='setting-group-container'>
        <p className='modified-group-text'>Modifier le nom du groupe</p>
        <div className='container-modified-group-name'>
          <input
            type='text'
            className='modified-group-input'
            name='groupName'
            onChange={handleGroupNameChange}
            placeholder='Nouveau nom'
            value={groupName}
            required
            minLength='5'
            maxLength='25'
            disabled={isGroupName}
          />
        </div>
        <p className={groupName.length < 5 ? 'infoSettings' : 'infoSettings green'}>Entre 5 et 25 caractères</p>
        {!isGroupName && <button className='button-validate-modification' onClick={handleChosenName}>Valider</button>}
      </form>
      <div className='setting-group-container'>
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
                ? 'fas fa-plus-circle email-enabled setting-btn'
                : 'fas fa-plus-circle email-disabled setting-btn'
            }
            />
          </button>
        </div>
        <p className={allEmails.length < 3 ? 'infoSettings' : 'infoSettings green'}>Entre 4 à 12 personnes</p>
      </form>
      <div className='settings-group-bottom'>
        <ul className='settings-emails-container'>
          {
            allEmails.map((email, i) => (
              <li className='settings-emails-list' key={i}>
                {email}
                <input type='button' value='X' name={email} className='remove-email' onClick={handleRemoveEmail} />
              </li>
            ))
          }
        </ul>
        <button className='button-validate-modification' onClick={handleValidateNewMembers}>Valider</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(MySettingsGroups)
