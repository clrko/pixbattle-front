import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import DropDown from '../shared/DropDown'
import Navbar from '../shared/Navbar'
import StickyFooter from '../shared/StickyFooter'
import avatar from '../../asset/pictures/avatar_MyProfile.png'
import avatar2 from '../../asset/pictures/avatar2.png'
import avatar3 from '../../asset/pictures/avatar3.png'
import avatar4 from '../../asset/pictures/avatar4.png'
import './Podium.css'

const Menu = withRouter(DropDown)

class Podium extends React.Component {
  state = {
    user: [{
      id: 1,
      username: 'Marie',
      avatar: avatar3,
      victories: 9
    },
    {
      id: 2,
      username: 'Jean',
      avatar: avatar2,
      victories: 7
    },
    {
      id: 3,
      username: 'Paul',
      avatar: avatar,
      victories: 6
    },
    {
      id: 4,
      username: 'Aristide',
      avatar: avatar4,
      victories: 5
    },
    {
      id: 5,
      username: 'Marion',
      avatar: avatar2,
      victories: 3
    },
    {
      id: 6,
      username: 'Zoé',
      avatar: avatar3,
      victories: 2
    },
    {
      id: 7,
      username: 'Lola',
      avatar: avatar3,
      victories: 1
    },
    {
      id: 8,
      username: 'Julien',
      avatar: avatar4,
      victories: 0
    },
    {
      id: 9,
      username: 'Auxence',
      avatar: avatar,
      victories: 0
    }
    ]
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
      <div>
        <Navbar />
        <Menu />
        <div className='div-AvatarPodium'>
          <div className='div-center-AvatarPodium'>
            <div className='AvatarPodium second-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{this.state.user[1].username}</p>
                <i class='fas fa-star'><p className='p-user-victories-podium'>{this.state.user[1].victories}</p></i>
              </div>
              <div className='div-img-Avatar2'>
                <img className='img-avatar-position' src={this.state.user[1].avatar} alt='avatar' />
              </div>
              <i class='fas fa-medal medal2' />
            </div>
            <div className='AvatarPodium first-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{this.state.user[0].username}</p>
                <i class='fas fa-star'><p className='p-user-victories-podium'>{this.state.user[0].victories}</p></i>
              </div>
              <div className='div-img-Avatar1'>
                <img className='img-avatar-position' src={this.state.user[0].avatar} alt='avatar' />
              </div>
              <i class='fas fa-medal medal1'><p /></i>
            </div>
            <div className='AvatarPodium third-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{this.state.user[2].username}</p>
                <i class='fas fa-star'><p className='p-user-victories-podium'>{this.state.user[2].victories}</p></i>
              </div>
              <div className='div-img-Avatar3'>
                <img className='img-avatar-position' src={this.state.user[2].avatar} alt='avatar' />
              </div>
              <i class='fas fa-medal medal3' />
            </div>
          </div>
          <div className='div-congratulations'>
            <h1 className='h1-div-congratulations'>Félicitations {this.state.user[0].username} !</h1>
            <button className='button-createdNewGroup-MyProfile button-div-congratulations' onClick={this.handleCreateGroupe}>crée la prochaine battle</button>
          </div>
          <div className='div-attendee-list'>
            {this.state.user.slice(3).map((user, i) => (
              <div key={i} className='div-participant'>
                <div className='margin-div-participant'>
                  <p className='p-div-participant'>{user.id}.</p>
                </div>
                <div className='margin-div-participant'>
                  <img className='img-attendee-list' src={user.avatar} alt='avatar' />
                </div>
                <div className='margin-div-participant'>
                  <p className='p-div-participant'>{user.username}</p>
                </div>
                <div className='margin-fa-star-attendee-list'>
                  <i class='fas fa-star fa-star-attendee-list'><p className='p-user-victories'>{user.victories}</p></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default Podium
