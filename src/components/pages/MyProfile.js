import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import DropDown from '../shared/DropDown'
import Navbar from '../shared/Navbar'
import StickyFooter from '../shared/StickyFooter'
import './MyProfile.css'

const Menu = withRouter(DropDown)

const mapStateToProps = state => {
  const { user, profileInfos } = state
  return { user, profileInfos }
}

const MyProfile = ({ user, history }) => {
  const handleCreateGroupe = e => {
    e.preventDefault()
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/group-creation`,
        {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        }
      )
      .then(res => {
        const groupId = res.data.groupId
        history.push({
          pathname: `/newgroup/${groupId}`
        })
      })
  }
  return (
    <div className='background-MyProfile'>
      <Navbar />
      <Menu />
      <div className='window-MyProfile'>
        <div className='name-fa-star-MyProfile'>
          <h1 className='name-MyProfile'>{user.username}<i className='fa fa-star fa-lg star-icon-MyProfile'><p className='p-victory-point-MyProfile'>20</p></i></h1>
        </div>
        <div className='div-avatar-Myprofile'>
          <img className='avatar-MyProfile' src={user.avatar} alt='avatar' />
        </div>
        <div className='div-informations-MyProfile'>
          <p className='p-victory-MyProfile'>7 victoires</p>
          <p className='p-picture-MyProfile'>12 photos</p>
          <p className='p-group-MyProfile'>2 groupes</p>
          <p className='p-friend-MyProfile'>18 amis</p>
          <button className='button-createdNewGroup-MyProfile' onClick={handleCreateGroupe}>Créer un nouveau groupe</button>
        </div>
      </div>
      <StickyFooter />
    </div>
  )
}

export default connect(mapStateToProps)(MyProfile)
