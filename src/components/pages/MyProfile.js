import React from 'react'
import { withRouter } from 'react-router-dom'
import DropDown from './DropDown'
import StickyFooter from '../shared/StickyFooter'
import avatar from '../../asset/pictures/avatar_MyProfile.png'
import './MyProfile.css'

const Menu = withRouter(DropDown)

class MyProfile extends React.Component {
  render () {
    return (
      <div className='background-MyProfile'>
        <Menu />
        <div className='window-MyProfile'>
          <div className='name-fa-star-MyProfile'>
            <h1 className='name-MyProfile'>Lucas<i className='fa fa-star fa-lg'><p className='p-victory-point'>20</p></i></h1>
          </div>
          <div className='div-avatar-Myprofile'>
            <img className='avatar-MyProfile' src={avatar} alt='avatar' />
          </div>
          <div className='div-informations-MyProfile'>
            <p className='p-victory-MyProfile'>4 victoires</p>
            <p className='p-picture-MyProfile'>12 photos</p>
            <p className='p-group-MyProfile'>2 groupes</p>
            <p className='p-friend-MyProfile'>18 amis</p>
          </div>
          <button className='button-createdNewGroup-MyProfile'>Créer un nouveau groupe</button>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default MyProfile
