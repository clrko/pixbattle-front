import React from 'react'
import { connect } from 'react-redux'
import { ADD_GROUP } from '../../store/action-types'
import axios from 'axios'
import DropDownResults from '../shared/DropDownResults'
import Loader from 'react-loader-spinner'
import './BattleResults.css'

const mapStateToProps = state => {
  const { user, profileInfos } = state
  return { user, profileInfos }
}

class BattleResults extends React.Component {
  state = {
    users: '',
    victories: []
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
          users: res.data.participantsList,
          victories: res.data.victoriesParticipants
        })
      )
  }

  handleCreateBattle = e => {
    e.preventDefault()
    const { dispatch, history, match } = this.props
    const currentGroupId = { groupId: match.params.groupId }
    dispatch({ type: ADD_GROUP, currentGroupId })
    history.push({
      pathname: `/battle-creation/group-created/${currentGroupId}`
    })
  }

  render () {
    const { users } = this.state
    const { user } = this.props

    if (!users) {
      return (
        <div style={{ width: 'auto', margin: 'auto', textAlign: 'center' }}>
          <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
        </div>
      )
    }

    return (
      <div>
        <DropDownResults />
        <div className='div-AvatarPodium'>
          <div className='div-center-AvatarPodium'>
            <div className='AvatarPodium second-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{users[1].username}</p>
                <i className='fas fa-star'><p className='p-user-victories-podium'>{!users[1].victories && 0}</p></i>
              </div>
              <div className='div-img-Avatar2'>
                <img className='img-avatar-position' src={users[1].avatar_url} alt='avatar' />
              </div>
              <i className='fas fa-medal medal2' />
            </div>
            <div className='AvatarPodium first-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{users[0].username}</p>
                <i className='fas fa-star'><p className='p-user-victories-podium'>{!users[0].victories && 0}</p></i>
              </div>
              <div className='div-img-Avatar1'>
                <img className='img-avatar-position' src={users[0].avatar_url} alt='avatar' />
              </div>
              <i className='fas fa-medal medal1'><p /></i>
            </div>
            <div className='AvatarPodium third-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{users[2].username}</p>
                <i className='fas fa-star'><p className='p-user-victories-podium'>{!users[2].victories && 0}</p></i>
              </div>
              <div className='div-img-Avatar3'>
                <img className='img-avatar-position' src={users[2].avatar_url} alt='avatar' />
              </div>
              <i className='fas fa-medal medal3' />
            </div>
          </div>
          <div className='div-congratulations'>
            <h1 className='h1-div-congratulations'>Félicitations {users[0].username} !</h1>
            {
              user.userId === users[0].user_id
                ? <button className='button-createdNewGroup-MyProfile button-div-congratulations' onClick={this.handleCreateBattle}>Crée la prochaine battle</button>
                : <div className='button-div-congratulations-empty' />
            }
          </div>
          <div className='div-attendee-list'>
            {
              users.slice(3).map((u, i) => (
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
                    <i className='fas fa-star fa-star-attendee-list'>
                      <p className='p-user-victories'>{!u.victories && 0}</p>
                    </i>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(BattleResults)
