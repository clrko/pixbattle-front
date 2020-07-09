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
          <option value='/MyRanking'>Mon Classement</option>
          <option value='/MyPictures'>Mes Photos</option>
          <option value='/Podium'>Mon Podium</option>
        </select>
      </div>
    )
  }
}

export default DropDown
