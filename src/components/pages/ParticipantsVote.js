import React from 'react'
import DropDownVote from '../shared/DropDownVote'
import ListParticipantsVote from './ListParticipantsVote'
import './ParticipantsVote.css'

class ParticipantsVote extends React.Component {
  render () {
    return (
      <div className='background-ParticipantsVote'>
        <DropDownVote />
        <ListParticipantsVote />
      </div>
    )
  }
}

export default ParticipantsVote
