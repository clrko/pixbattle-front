import React from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import DropDown from '../shared/DropDown'
import StickyFooter from '../shared/StickyFooter'
import './MyBattles.css'

const Menu = withRouter(DropDown)

class MyBattles extends React.Component {
  render () {
    return (
      <div className='MyBattles-background'>
        <Navbar />
        <Menu />
        <div className='MyBattles-cardList'>
          <div className='MyBattles-card'>
            <h2 className='MyBattles-card-title'>Thèmes: Reflets</h2>
            <p>Temps écoulé</p>
            <p>Progress bar</p>
            <button className='MyBattles-card-button'>Vote</button>
            <p className='MyBattles-card-group'>Team Pix battle</p>
          </div>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default MyBattles
