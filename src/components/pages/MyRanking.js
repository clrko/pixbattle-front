import React from 'react'
import DropDown from '../shared/DropDown'
import ListRankingMembers from '../shared/ListRankingMembers'
import './MyRanking.css'

class MyRanking extends React.Component {
  render () {
    return (
      <div className='background-MyRanking'>
        <DropDown />
        <ListRankingMembers />
      </div>
    )
  }
}

export default MyRanking
