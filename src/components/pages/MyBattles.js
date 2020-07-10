import React from 'react'
import MyBattlesCardList from './MyBattlesCardList'
import Navbar from '../shared/Navbar'
import PageHeader from '../shared/PageHeader.js'
import StickyFooter from '../shared/StickyFooter'
import './MyBattles.css'

const MyBattles = () => {
  return (
    <div className='MyBattles-background'>
      <Navbar />
      <PageHeader pageTitle='My Battles' />
      <MyBattlesCardList />
      <StickyFooter />
    </div>
  )
}

export default MyBattles
