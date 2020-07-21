import React from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import DropDown from '../shared/DropDown'
import './BattleResults.css'

class BattleResults extends React.Component {
  state = {
    users: ''
  }

  componentDidMount () {
    this.getResults()
  }

  getResults = () => {
    const { battleId, groupId } = this.props.match.params
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/${groupId}/${battleId}/results`)
      .then(res => this.setState({ users: res.data }))
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
    const { users } = this.state

    if (!users) {
      return (
        <div style={{ width: 'auto', margin: 'auto', textAlign: 'center' }}>
          <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
        </div>
      )
    }

    return (
      <div>
        <DropDown />
        <div className='div-AvatarPodium'>
          <div className='div-center-AvatarPodium'>
            <div className='AvatarPodium second-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{users[1].username}</p>
                <i className='fas fa-star'><p className='p-user-victories-podium'>{users[1].victories}</p></i>
              </div>
              <div className='div-img-Avatar2'>
                <img className='img-avatar-position' src={users[1].avatar_url} alt='avatar' />
              </div>
              <i className='fas fa-medal medal2' />
            </div>
            <div className='AvatarPodium first-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{users[0].username}</p>
                <i className='fas fa-star'><p className='p-user-victories-podium'>{users[0].victories}</p></i>
              </div>
              <div className='div-img-Avatar1'>
                <img className='img-avatar-position' src={users[0].avatar_url} alt='avatar' />
              </div>
              <i className='fas fa-medal medal1'><p /></i>
            </div>
            <div className='AvatarPodium third-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{users[2].username}</p>
                <i className='fas fa-star'><p className='p-user-victories-podium'>{users[2].victories}</p></i>
              </div>
              <div className='div-img-Avatar3'>
                <img className='img-avatar-position' src={users[2].avatar_url} alt='avatar' />
              </div>
              <i className='fas fa-medal medal3' />
            </div>
          </div>
          <div className='div-congratulations'>
            <h1 className='h1-div-congratulations'>Félicitations {users[0].username} !</h1>
            <button className='button-createdNewGroup-MyProfile button-div-congratulations' onClick={this.handleCreateGroupe}>Crée la prochaine battle</button>
          </div>
          <div className='div-attendee-list'>
            {users.slice(3).map((u, i) => (
              <div key={i} className='div-participant'>
                <div className='margin-div-participant'>
                  <p className='p-div-participant'>{i + 4}.</p>
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
      </div>
    )
  }
}

export default BattleResults
