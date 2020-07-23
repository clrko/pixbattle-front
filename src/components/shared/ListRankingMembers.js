import React from 'react'
import './ListRankingMembers.css'

const ListRankingMembers = ({ listParticipants, getIcon }) => {
  return (
    <div className='window-RankingMembers scrollbar-ListRankingMembers'>
      {listParticipants.map((p, i) => (
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
            {getIcon(p)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListRankingMembers
