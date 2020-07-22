import React, { useState, useEffect } from 'react'
import './ListRankingMembers.css'

const ListRankingMembers = ({ participants, hasPosted, hasVoted, victories }) => {
  const [icon, setIcon] = useState('')

  useEffect(() => {
    return getIcon
  }, [])

  const getIcon = () => {
    if (hasPosted) {
      setIcon('far fa-image fa-image-ListParticipantsPost')
    } else if (hasVoted) {
      setIcon('far fa-image fa-image-ListParticipantsVote')
    } else if (victories) {
      setIcon('fas fa-trophy fa-trophy-RankingMembers')
    }
  }

  console.log('ldkgj', icon)

  return (

    <div className='window-RankingMembers scrollbar-ListRankingMembers'>

      {participants.map((p, i) => (
        <div key={i} className='div-participants-RankingMembers'>
          <div className='margin-div-participant-RankingMembers'>
            <p className='p-div-participant-RankingMembers'>{p.user_id}.</p>
          </div>
          <div className='margin-div-participant-RankingMembers'>
            <img className='img-attendee-list-RankingMembers' src={p.avatar_url} alt='avatar' />
          </div>
          <div className='margin-p-div-participant-RankingMembers'>
            <p className='p-margin-div-participant-RankingMembers'>{p.username}</p>
          </div>
          <div className='margin-fa-trophy-RankingMembers'>
            {
              hasPosted.map(userId => userId === participants.user_id) && <i className={icon} />
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListRankingMembers
