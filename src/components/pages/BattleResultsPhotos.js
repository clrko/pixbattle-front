import React from 'react'
import DropDownResults from '../shared/DropDownResults'
import Navbar from '../shared/Navbar'
import StickyFooter from '../shared/StickyFooter'
import './MyRanking.css'

class BattleResultsPhotos extends React.Component {
  render () {
    return (
      <div className='background-MyRanking'>
        <Navbar />
        <DropDownResults />
        <StickyFooter />
      </div>
    )
  }
}

export default BattleResultsPhotos
