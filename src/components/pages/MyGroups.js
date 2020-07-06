import React from 'react'
import { withRouter } from 'react-router-dom'
import NavbarMobile from '../shared/NavbarMobile'
import DropDown from '../shared/DropDown'
import StickyFooter from '../shared/StickyFooter'
import './MyGroups.css'

const Menu = withRouter(DropDown)

class MyGroups extends React.Component {
  render () {
    return (
      <div className='background-MyGroups'>
        <NavbarMobile />
        <Menu />
        <div className='window-MyGroups'>
          <p>Mes Groupes</p>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default MyGroups
