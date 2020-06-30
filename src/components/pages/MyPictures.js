import React from 'react'
import { withRouter } from 'react-router-dom'
import NavbarMobile from '../shared/NavbarMobile'
import DropDown from '../shared/DropDown'
import StickyFooter from '../shared/StickyFooter'
import './MyPictures.css'

const Menu = withRouter(DropDown)

class MyPictures extends React.Component {
  render () {
    return (
      <div className='background-MyPictures'>
        <NavbarMobile />
        <Menu />
        <div className='window-MyPictures'>
          <p>Mes Photos</p>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default MyPictures
