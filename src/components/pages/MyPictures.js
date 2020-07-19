import React from 'react'
import Navbar from '../shared/Navbar'
import DropDownMyProfile from '../shared/DropDownMyProfile'
import StickyFooter from '../shared/StickyFooter'
import './MyPictures.css'

class MyPictures extends React.Component {
  render () {
    return (
      <div className='background-MyPictures'>
        <Navbar />
        <DropDownMyProfile />
        <div className='window-MyPictures'>
          <p>Mes Photos</p>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default MyPictures
