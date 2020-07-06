import React from 'react'
import { withRouter } from 'react-router-dom'
import NavbarMobile from '../shared/NavbarMobile'
import DropDown from '../shared/DropDown'
import StickyFooter from '../shared/StickyFooter'
import './MyBattles.css'

const Menu = withRouter(DropDown)

class MyBattles extends React.Component {
  render () {
    return (
      <div className='background-MyBattles'>
        <NavbarMobile />
        <Menu />
        <div className='window-MyBattles'>
          <p>Mes Battles</p>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default MyBattles
