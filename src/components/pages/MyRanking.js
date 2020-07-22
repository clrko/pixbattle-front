import React from 'react'
import DropDownMyProfile from '../shared/DropDownMyProfile'
import ListRankingMembers from '../shared/ListRankingMembers'
import './MyRanking.css'

class MyRanking extends React.Component {
  render () {
    return (
      <div className='background-MyRanking'>
        <DropDownMyProfile />
        <ListRankingMembers />
      </div>
    )
  }
}

export default MyRanking
