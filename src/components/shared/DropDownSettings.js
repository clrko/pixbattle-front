import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './DropDown.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

class DropDownSettings extends React.Component {
  handleChange = e => {
    this.props.history.push(e.target.value)
  }

  render () {
    const { match, user } = this.props
    const selectedOption = match.url
    return (
      <div className='background-DropDown'>
        <select value={selectedOption} className='DropDown' onChange={this.handleChange}>
          <option value={`/${user.username}/profile-settings`}>Paramètres du profil</option>
          <option value={`/${user.username}/connection-settings`}>Paramètres de connexion</option>
        </select>
      </div>
    )
  }
}

export default connect(mapStateToProps)(withRouter(DropDownSettings))
