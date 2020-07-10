import React from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import DropDown from '../shared/DropDown'
import StickyFooter from '../shared/StickyFooter'
import './MyRanking.css'

const Menu = withRouter(DropDown)

class MyRanking extends React.Component {
  render () {
    return (
      <div className='background-MyRanking'>
        <Navbar />
        <Menu />
        <div className='window-MyRanking'>
          <p>Mon Classement</p>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default MyRanking
