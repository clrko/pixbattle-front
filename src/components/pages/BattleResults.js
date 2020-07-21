import React from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import DropDown from '../shared/DropDown'
import './BattleResults.css'

class BattleResults extends React.Component {
  state = {
    users: '',
    scores: '',
    victories: '',
    allInfos: ''
  }

  componentDidMount () {
    this.getResults()
  }

  getResults = () => {
    const { battleId, groupId } = this.props.match.params
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/battle/${groupId}/${battleId}/results`)
      .then(res =>
        this.setState({
          users: res.data.infosUsers,
          scores: res.data.sortedScores,
          victories: res.data.victories
        }, () => this.allInfos(), console.log('function', this.allInfos()))
      )
  }

  allInfos = () => {
    const infos = [...this.state.users]
    const scores = [...this.state.scores]
    const allInfosTemp = []
    infos.find((info, i) => {
      if (info.user_id === scores[i].user_id) {
        const id = scores[i].user_id
        console.log(id)
        allInfosTemp.push(info, scores[i])
      }
      return allInfosTemp
    })
    this.setState({ allInfos: allInfosTemp })
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
    const { users, allInfos } = this.state

    if (users === undefined) {
      return (
        <div style={{ width: 'auto', margin: 'auto', textAlign: 'center' }}>
          <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
        </div>
      )
    }

    return (
      <div>
        <DropDown />
        {allInfos && console.log('state', allInfos)}
        {/* <div className='div-AvatarPodium'>
          <div className='div-center-AvatarPodium'>
            <div className='AvatarPodium second-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{users[3].username}</p>
                <i className='fas fa-star'><p className='p-user-victories-podium'>{users.victories}</p></i>
              </div>
              <div className='div-img-Avatar2'>
                <img className='img-avatar-position' src={users[3].avatar_url} alt='avatar' />
              </div>
              <i className='fas fa-medal medal2' />
            </div>
            <div className='AvatarPodium first-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{users[0].username}</p>
                <i className='fas fa-star'><p className='p-user-victories-podium'>{users.victories}</p></i>
              </div>
              <div className='div-img-Avatar1'>
                <img className='img-avatar-position' src={users[0].avatar_url} alt='avatar' />
              </div>
              <i className='fas fa-medal medal1'><p /></i>
            </div>
            <div className='AvatarPodium third-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>{users[6].username}</p>
                <i className='fas fa-star'><p className='p-user-victories-podium'>{users.victories}</p></i>
              </div>
              <div className='div-img-Avatar3'>
                <img className='img-avatar-position' src={users[6].avatar_url} alt='avatar' />
              </div>
              <i className='fas fa-medal medal3' />
            </div>
          </div>
          <div className='div-congratulations'>
            <h1 className='h1-div-congratulations'>Félicitations {users[0].username} !</h1>
            <button className='button-createdNewGroup-MyProfile button-div-congratulations' onClick={this.handleCreateGroupe}>crée la prochaine battle</button>
          </div>
          <div className='div-attendee-list'>
            {users.slice(9).map((u, i) => (
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
        </div> */}
      </div>
    )
  }
}

export default BattleResults
