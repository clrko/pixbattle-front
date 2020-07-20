import React from 'react'
import DropDownPost from '../shared/DropDownPost'
import './ParticipantsPost.css'
import ListParticipantsPost from './ListParticipantsPost'

class ParticipantsPost extends React.Component {
  render () {
    return (
      <div className='background-ParticipantsPost'>
        <DropDownPost />
        <ListParticipantsPost />
      </div>
    )
  }
}

export default ParticipantsPost
