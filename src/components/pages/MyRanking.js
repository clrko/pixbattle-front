import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import DropDownMyProfile from '../shared/DropDownMyProfile'
import ListRankingMembers from '../shared/ListRankingMembers'
import './MyRanking.css'

const mapStateToProps = state => {
  const { user, profileInfos } = state
  return { user, profileInfos }
}
class MyRanking extends React.Component {
  state = {
    participants: [],
    victories: []
  }

  componentDidMount () {
    this.getMyRanking()
  }

  getMyRanking = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/profile/my-ranking`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => console.log(res.data))
  }

  render () {
    const { participants, victories } = this.state
    return (
      <div className='background-MyRanking'>
        <DropDownMyProfile />
        <ListRankingMembers participants={participants} victories={victories} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(MyRanking)
