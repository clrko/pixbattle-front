import React from 'react'
import { withRouter } from 'react-router-dom'
import DropDown from '../shared/DropDown'
import Navbar from '../shared/Navbar'
import ListRankingMembers from '../shared/ListRankingMembers'
import StickyFooter from '../shared/StickyFooter'
import './MyRanking.css'

const Menu = withRouter(DropDown)

class MyRanking extends React.Component {
  render () {
    return (
      <div className='background-MyRanking'>
        <Navbar />
        <Menu />
        <ListRankingMembers />
        <StickyFooter />
      </div>
    )
  }
}

export default MyRanking
