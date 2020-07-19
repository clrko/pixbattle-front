import React from 'react'
import Navbar from '../shared/Navbar'
import DropDown from '../shared/DropDown'
import StickyFooter from '../shared/StickyFooter'
import './MyPictures.css'

class MyPictures extends React.Component {
  render () {
    return (
      <div className='background-MyPictures'>
        <Navbar />
        <DropDown />
        <div className='window-MyPictures'>
          <p>Mes Photos</p>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default MyPictures
