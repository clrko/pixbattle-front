import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './DropDown.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

const DropDownMyProfile = ({ user, history, match }) => {
  const handleChange = e => {
    history.push(e.target.value)
  }

  const handleSettings = e => {
    e.preventDefault()
    history.push(`/${user.username}/settings/informations`)
  }

  const selectedOption = match.url

  return (
    <div className='background-DropDown'>
      <select value={selectedOption} className='DropDown' onChange={handleChange}>
        <option value={`/${user.username}`}>Mon Profil</option>
        <option value={`/${user.username}/ranking`}>Mon Classement</option>
        <option value={`/${user.username}/pictures`}>Mes Photos</option>
      </select>
      <button className='settings-btn-profil' onClick={handleSettings}><i class='fas fa-cog' /></button>
    </div>
  )
}

export default connect(mapStateToProps)(withRouter(DropDownMyProfile))
