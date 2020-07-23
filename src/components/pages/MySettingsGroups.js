import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ListMembers from '../shared/ListMembers'
import './MySettingsGroups.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

const MySettingsGroups = ({ user }) => {
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
      /* ajouter le axios et mettre a true quand on a la reponse */
      setIsGroupName(true)
    }
  }

  const handleRemoveParticipant = e => {
    const listTemp = [...listGroupMembers]
    const index = listTemp.findIndex(item => item.user_id === parseInt(e.target.id))
    const remove = window.confirm('Es-tu certain(e) de vouloir retirer ce membre du groupe?')
    if (remove) {
      listTemp.splice(index, 1)
      setListGroupMembers(listTemp)
      /* ajouter axios */
    }
  }

  const handleAddEmail = e => {
    e.preventDefault()
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      if (email === user.userEmail) {
        return alert('Tu ne peux pas ajouter ton propre email')
      }
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

  const handleEmailChange = e => setEmail(e.target.value)

  const handleRemoveEmail = e => {
    const email = e.target.name
    const allEmailsTemp = [...allEmails]
    setAllEmails(allEmailsTemp.filter(em => em !== email))
    setCount(count - 1)
  }

  useEffect(() => {
    /* lors du axios il faudra cset le count au lengt su memberlist ilf aut recuperer aussi les emails */
  })

  return (
    <div>
      <div>ajouter un dropdown</div>
      <div className='background-PageProfileSettings'>
        <form className='setting-group-container'>
          <p className='modified-group-text'>Modifier le nom du groupe</p>
          <div className='container-modified-group-name'>
            <input
              type='text'
              className='modified-group-input'
              name='groupName'
              onChange={handleGroupNameChange}
              placeholder='Nom du groupe' /* mettre le group actuel */
              value={groupName}
              required
              minLength='5'
              maxLength='25'
              disabled={isGroupName}
            />
            {
              !isGroupName &&
                <button className='button-modified-group-name' onClick={handleChosenName}>
                Valider
                </button>
            }
          </div>
          <p className={groupName.length < 5 ? 'infoSettings' : 'infoSettings green'}>Entre 5 et 25 caractères</p>
        </form>
        <section className='setting-group-container'>
          <p className='modified-group-text'>Liste des membres</p>
          <ListMembers listParticipants={listGroupMembers} handleRemoveParticipant={handleRemoveParticipant} />
          <div className='setting-group-container'>
            <p className='modified-group-text'>Ajoute un nouveau membre</p>
            <form onSubmit={handleAddEmail} className='group-input'>
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
                    ? 'fas fa-plus-circle email-enabled'
                    : 'fas fa-plus-circle email-disabled'
                }
                />
              </button>
            </form>
            <p className={allEmails.length < 3 ? 'info' : 'info green'}>
              Entre 4 à 12 personnes
            </p>
          </div>
          <div className='group-bottom'>
            <ul className='emails-container'>
              {
                allEmails.map((email, i) => (
                  <li className='emails-list' key={i}>
                    {email}
                    <input type='button' value='X' name={email} className='remove-email' onClick={handleRemoveEmail} />
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(MySettingsGroups)
