import React from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import DropDown from '../shared/DropDown'
import MyBattlesCardList from './MyBattlesCardList'
import StickyFooter from '../shared/StickyFooter'
import './MyBattles.css'

const Menu = withRouter(DropDown)

const MyBattles = () => {
  return (
    <div className='MyBattles-background'>
      <Navbar />
      <Menu />
      <MyBattlesCardList />
      <StickyFooter />
    </div>
  )
}

export default MyBattles
