import React from 'react'
import { withRouter } from 'react-router-dom'
import DropDown from '../shared/DropDown'
import './MyPictures.css'

const Menu = withRouter(DropDown)

class MyPictures extends React.Component {
  render () {
    return (
      <div className='background-MyPictures'>
        <Menu />
        <div className='window-MyPictures'>
          <p>Mes Photos</p>
        </div>
      </div>
    )
  }
}

export default MyPictures
