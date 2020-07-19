import React from 'react'
import Navbar from '../shared/Navbar'
import DropDown from '../shared/DropDown'
import StickyFooter from '../shared/StickyFooter'
import './MyGroups.css'

class MyGroups extends React.Component {
  render () {
    return (
      <div className='background-MyGroups'>
        <Navbar />
        <DropDown />
        <div className='window-MyGroups'>
          <p>Mes Groupes</p>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default MyGroups
