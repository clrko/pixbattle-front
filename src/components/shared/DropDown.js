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
          <option value='/:username'>Mon Profil</option>
          <option value='/:username/ranking'>Mon Classement</option>
          <option value='/:username/pictures'>Mes Photos</option>
          <option value='/battles/:id/results'>Mon Podium</option>
        </select>
      </div>
    )
  }
}

export default DropDown
