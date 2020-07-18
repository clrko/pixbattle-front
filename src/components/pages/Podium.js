import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import DropDown from '../shared/DropDown'
import Navbar from '../shared/Navbar'
import StickyFooter from '../shared/StickyFooter'
import './Podium.css'

const Menu = withRouter(DropDown)

class Podium extends React.Component {
  state = {
    users: []
  }

  componentDidMount () {
    this.getResults()
  }

  getResults = () => {
    const { battleId } = this.props.match.params
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/${battleId}/results`)
      .then(res =>
        this.setState({
          user: res.data
        })
      )
  }

  handleCreateGroupe = e => {
    e.preventDefault()
    const { history } = this.props
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/group-creation`,
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

  render () {
    const { user } = this.state

    if (user === undefined) {
      return <p>loading...</p>
    }

    return (
      <div>
        <Navbar />
        <Menu />
        <div className='div-AvatarPodium'>
          <div className='div-center-AvatarPodium'>
            <div className='AvatarPodium second-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{user[3].username}</p>
                <i className='fas fa-star'><p className='p-user-victories-podium'>{user.victories}</p></i>
              </div>
              <div className='div-img-Avatar2'>
                <img className='img-avatar-position' src={user[3].avatar_url} alt='avatar' />
              </div>
              <i className='fas fa-medal medal2' />
            </div>
            <div className='AvatarPodium first-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{user[0].username}</p>
                <i className='fas fa-star'><p className='p-user-victories-podium'>{user.victories}</p></i>
              </div>
              <div className='div-img-Avatar1'>
                <img className='img-avatar-position' src={user[0].avatar_url} alt='avatar' />
              </div>
              <i className='fas fa-medal medal1'><p /></i>
            </div>
            <div className='AvatarPodium third-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{user[6].username}</p>
                <i className='fas fa-star'><p className='p-user-victories-podium'>{user.victories}</p></i>
              </div>
              <div className='div-img-Avatar3'>
                <img className='img-avatar-position' src={user[6].avatar_url} alt='avatar' />
              </div>
              <i className='fas fa-medal medal3' />
            </div>
          </div>
          <div className='div-congratulations'>
            <h1 className='h1-div-congratulations'>Félicitations {user[0].username} !</h1>
            <button className='button-createdNewGroup-MyProfile button-div-congratulations' onClick={this.handleCreateGroupe}>crée la prochaine battle</button>
          </div>
          <div className='div-attendee-list'>
            {user.slice(9).map((u, i) => (
              <div key={i} className='div-participant'>
                <div className='margin-div-participant'>
                  <p className='p-div-participant'>{u.user_id}.</p>
                </div>
                <div className='margin-div-participant'>
                  <img className='img-attendee-list' src={u.avatar_url} alt='avatar' />
                </div>
                <div className='margin-div-participant'>
                  <p className='p-div-participant'>{u.username}</p>
                </div>
                <div className='margin-fa-star-attendee-list'>
                  <i className='fas fa-star fa-star-attendee-list'><p className='p-user-victories'>{u.victories}</p></i>
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
