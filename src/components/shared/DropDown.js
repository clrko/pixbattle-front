import React from 'react'
import { connect } from 'react-redux'
import './DropDown.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

const DropDown = ({ user, history, match }) => {
  const handleChange = e => {
    history.push(e.target.value)
  }

  const selectedOption = match.path

  return (
    <div className='background-DropDown'>
      <select value={selectedOption} className='DropDown' onChange={handleChange}>
        <option value={`/${user.username}`}>Mon Profil</option>
        <option value={`/${user.username}/ranking`}>Mon Classement</option>
        <option value={`/${user.username}/pictures`}>Mes Photos</option>
        {/* <option value='/battles/:id/results'>Mon Podium</option> */} {/* composant à expliciter  */}
      </select>
    </div>
  )
}

export default connect(mapStateToProps)(DropDown)
