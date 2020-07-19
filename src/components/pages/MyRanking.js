import React from 'react'
import DropDownMyProfile from '../shared/DropDownMyProfile'
import Navbar from '../shared/Navbar'
import ListRankingMembers from '../shared/ListRankingMembers'
import StickyFooter from '../shared/StickyFooter'
import './MyRanking.css'

class MyRanking extends React.Component {
  render () {
    return (
      <div className='background-MyRanking'>
        <Navbar />
        <DropDownMyProfile />
        <ListRankingMembers />
        <StickyFooter />
      </div>
    )
  }
}

export default MyRanking
