import React from 'react'
import { withRouter } from 'react-router-dom'
import DropDown from '../shared/DropDown'
import Navbar from '../shared/Navbar'
import RankingMembers from '../shared/RankingMembers'
import StickyFooter from '../shared/StickyFooter'
import './MyRanking.css'

const Menu = withRouter(DropDown)

class MyRanking extends React.Component {
  render () {
    return (
      <div className='background-MyRanking'>
        <Navbar />
        <Menu />
        <RankingMembers />
        <StickyFooter />
      </div>
    )
  }
}

export default MyRanking
