import React from 'react'
import DropDownPost from '../shared/DropDownPost'
import Navbar from '../shared/Navbar'
import ListParticipantsPost from './ListParticipantsPost'
import StickyFooter from '../shared/StickyFooter'
import './ParticipantsPost.css'

class ParticipantsPost extends React.Component {
  render () {
    return (
      <div className='background-ParticipantsPost'>
        <Navbar />
        <DropDownPost />
        <ListParticipantsPost />
        <StickyFooter />
      </div>
    )
  }
}

export default ParticipantsPost
