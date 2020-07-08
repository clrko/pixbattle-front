import React from 'react'
import './DropDown.css'

class DropDown extends React.Component {
  handleChange = e => {
    this.props.history.push(e.target.value)
  }

  render () {
    const { match } = this.props
    const selectedOption = match.path
    return (
      <div className='background-DropDown'>
        <select value={selectedOption} className='DropDown' onChange={this.handleChange}>
          <option value='/MyProfile'>Mon Profil</option>
          <option value='/MyBattles'>Mes Battles</option>
          <option value='/MyGroups'>Mes Groupes</option>
          <option value='/MyRanking'>Mon Classement</option>
          <option value='/MyPictures'>Mes Photos</option>
        </select>
      </div>
    )
  }
}

export default DropDown
