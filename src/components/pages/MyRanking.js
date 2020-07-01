import React from 'react'
import { withRouter } from 'react-router-dom'
import DropDown from '../shared/DropDown'
import './MyRanking.css'

const Menu = withRouter(DropDown)

class MyRanking extends React.Component {
  render () {
    return (
      <div className='background-MyRanking'>
        <Menu />
        <div className='window-MyRanking'>
          <p>Mon Classement</p>
        </div>
      </div>
    )
  }
}

export default MyRanking
