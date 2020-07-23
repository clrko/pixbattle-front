import React from 'react'
import './ListMembers.css'

const ListMembers = ({ listParticipants, handleRemoveParticipant }) => {
  return (
    <>
      {listParticipants.map((p, i) => (
        <div key={i} className='div-participants-members'>
          <div className='margin-div-participant-members'>
            <p className='p-div-participant-members'>{p.user_id}.</p>
          </div>
          <div className='margin-div-participant-members'>
            <img className='img-attendee-list-members' src={p.avatar_url} alt='avatar' />
          </div>
          <div className='margin-p-div-participant-members'>
            <p className='p-margin-div-participant-members'>{p.username}</p>
          </div>
          <input type='button' value='X' name={p.username} className='participants-remove-btn' onClick={handleRemoveParticipant} />
        </div>
      ))}
    </>
  )
}

export default ListMembers
