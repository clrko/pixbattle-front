import React from 'react'
import DropDown from '../shared/DropDown'
import Navbar from '../shared/Navbar'
import ListRankingMembers from '../shared/ListRankingMembers'
import StickyFooter from '../shared/StickyFooter'
import './MyRanking.css'

class MyRanking extends React.Component {
  render () {
    return (
      <div className='background-MyRanking'>
        <Navbar />
        <DropDown />
        <ListRankingMembers />
        <StickyFooter />
      </div>
    )
  }
}

export default MyRanking
