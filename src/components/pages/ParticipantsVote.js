import React from 'react'
import DropDownVote from '../shared/DropDownVote'
import Navbar from '../shared/Navbar'
import ListParticipantsVote from './ListParticipantsVote'
import StickyFooter from '../shared/StickyFooter'
import './ParticipantsVote.css'

class ParticipantsVote extends React.Component {
  render () {
    return (
      <div className='background-ParticipantsVote'>
        <Navbar />
        <DropDownVote />
        <ListParticipantsVote />
        <StickyFooter />
      </div>
    )
  }
}

export default ParticipantsVote
