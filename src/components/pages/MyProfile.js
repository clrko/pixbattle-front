import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import DropDown from './DropDown'
import StickyFooter from '../shared/StickyFooter'
import avatar from '../../asset/pictures/avatar_MyProfile.png'
import './MyProfile.css'

const Menu = withRouter(DropDown)

class MyProfile extends React.Component {
  handleCreateGroupe = e => {
    e.preventDefault()
    const { history } = this.props
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/group-creation`,
        {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        },
        console.log('pouet', localStorage.getItem('token'))
      )
      .then(res => {
        const groupId = res.data.groupId
        history.push({
          pathname: `/newgroup/${groupId}`
        })
        console.log(groupId)
      })
  }

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
          <button className='button-createdNewGroup-MyProfile' onClick={this.handleCreateGroupe}>Créer un nouveau groupe</button>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default MyProfile
