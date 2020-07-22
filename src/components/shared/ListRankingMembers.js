import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import './ListRankingMembers.css'

const ListRankingMembers = ({ participants, hasPosted, hasVoted, victories }) => {
  const [icon, setIcon] = useState('')
  const [iconClass, setIconClass] = useState('')

  useEffect(() => {
    return getIcon
  })

  const getIcon = () => {
    if (hasPosted) {
      setIcon(hasPosted)
      setIconClass('far fa-image')
    } else if (hasVoted) {
      setIcon(hasVoted)
      setIconClass('fas fa-check')
    } else if (victories) {
      setIcon(victories)
      setIconClass('fas fa-trophy fa-trophy-RankingMembers')
    }
  }

  if (!icon) {
    return (
      <div style={{ width: 'auto', margin: 'auto', textAlign: 'center' }}>
        <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
      </div>
    )
  }

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
              icon.map(userId => userId === participants.user_id) && <i className={iconClass} />
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListRankingMembers
