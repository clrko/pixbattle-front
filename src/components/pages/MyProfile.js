import React from 'react'
import { withRouter } from 'react-router-dom'
import DropDown from './DropDown'
import './MyProfile.css'

const Menu = withRouter(DropDown)

class MyProfile extends React.Component {
  render () {
    return (
      <div className='background-MyProfile'>
        <Menu />
        <div className='window-MyProfile'>
          <p>Mon Profil</p>
        </div>
      </div>
    )
  }
}

export default MyProfile
