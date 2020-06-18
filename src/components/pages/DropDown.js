import React from 'react'
import './DropDown.css'

class DropDown extends React.Component {
  handleChange = e => {
    this.props.history.push(`/${e.target.value}`)
  }

  render () {
    return (
      <div className='background-DropDown'>
        <select className='DropDown' onChange={this.handleChange}>
          <option value='MyProfile'>Mon Profil</option>
          <option value='MyRanking'>Mon Classement</option>
          <option value='MyPictures'>Mes Photos</option>
        </select>
      </div>
    )
  }
}

export default DropDown
