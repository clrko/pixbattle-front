import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import DropDown from '../shared/DropDown'
import Navbar from '../shared/Navbar'
import StickyFooter from '../shared/StickyFooter'
import './MyProfile.css'

const mapStateToProps = state => {
  const { user, profileInfos } = state
  return { user, profileInfos }
}

const MyProfile = ({ user, profileInfos, history }) => {
  const handleCreateGroupe = e => {
    e.preventDefault()
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/group-creation`, {},
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
      .then(res => {
        const groupId = res.data.groupId
        history.push({
          pathname: `/group-creation/group-created/${groupId}`
        })
      })
  }

  if (profileInfos === null) {
    return <p>loading...</p>
  }

  return (
    <div className='background-MyProfile'>
      <Navbar />
      <DropDown />
      <div className='window-MyProfile'>
        <div className='name-fa-star-MyProfile'>
          <h1 className='name-MyProfile'>{user.username}
            <i className='fa fa-star fa-lg star-icon-MyProfile'>
              <p className='p-victory-point-MyProfile'>{!profileInfos.infos ? '0' : profileInfos.infos.victories}</p>
            </i>
          </h1>
        </div>
        <div className='div-avatar-Myprofile'>
          <img className='avatar-MyProfile' src={user.avatar} alt='avatar' placeholder='https://oasys.ch/wp-content/uploads/2019/03/photo-avatar-profil.png' />
        </div>
        <div className='div-informations-MyProfile'>
          <p className='p-picture-MyProfile'>{profileInfos.nbPhotos[0].nb_photos} photos postées</p>
          <p className='p-group-MyProfile'>{profileInfos.nbGroups[0].nb_groups} groupes</p>
          <p className='p-friend-MyProfile'>{profileInfos.nbBattles[0].nb_battles} battles</p>
          <button className='button-createdNewGroup-MyProfile' onClick={handleCreateGroupe}>Créer un nouveau groupe</button>
        </div>
      </div>
      <StickyFooter />
    </div>
  )
}

export default connect(mapStateToProps)(MyProfile)
