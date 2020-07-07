import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import DropDown from '../shared/DropDown'
import Navbar from '../shared/Navbar'
import StickyFooter from '../shared/StickyFooter'
import avatar from '../../asset/pictures/avatar_MyProfile.png'
import './MyProfile.css'

const Menu = withRouter(DropDown)

class MyProfile extends React.Component {
  componentDidMount () {
    this.handleInfosProfile()
  }

  handleInfosProfile = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/profile`,
        {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        }
      )
      .then(res => {
        console.log(res.data)
      })
  }

  handleCreateGroupe = e => {
    e.preventDefault()
    const { history } = this.props
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

  render () {
    return (
      <div className='background-MyProfile'>
        <Navbar />
        <Menu />
        <div className='window-MyProfile'>
          <div className='name-fa-star-MyProfile'>
            <h1 className='name-MyProfile'>Lucas<i className='fas fa-trophy star-icon-MyProfile'><p className='p-victory-point-MyProfile'>20</p></i></h1>
          </div>
          <div className='div-avatar-Myprofile'>
            <img className='avatar-MyProfile' src={avatar} alt='avatar' />
          </div>
          <div className='div-informations-MyProfile'>
            <h1 className='h1-title-MyProfile'>Statistiques</h1>
            <p className='p-picture-MyProfile'>12 photos</p>
            <p className='p-group-MyProfile'>2 groupes</p>
            <p className='p-friend-MyProfile'>18 amis</p>
            <button className='button-createdNewGroup-MyProfile' onClick={this.handleCreateGroupe}>Créer un nouveau groupe</button>
          </div>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default MyProfile
