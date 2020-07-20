import React from 'react'
import avatar5 from '../../asset/pictures/avatar5.png'
import avatar9 from '../../asset/pictures/avatar9.png'
import avatar10 from '../../asset/pictures/avatar10.png'
import avatar11 from '../../asset/pictures/avatar11.png'
import avatar12 from '../../asset/pictures/avatar12.png'
import avatar13 from '../../asset/pictures/avatar13.png'
import avatar14 from '../../asset/pictures/avatar14.png'
import avatar15 from '../../asset/pictures/avatar15.png'
import avatar16 from '../../asset/pictures/avatar16.png'
import avatar17 from '../../asset/pictures/avatar17.png'
import avatar18 from '../../asset/pictures/avatar18.png'
import avatar19 from '../../asset/pictures/avatar19.png'

import './ListParticipantsVote.css'

class ListParticipantsVote extends React.Component {
  state = {
    user: [
      {
        id: 1,
        username: 'Stéphane',
        avatar: avatar5,
        victories: 25,
        vote: true
      },
      {
        id: 2,
        username: 'Taeg',
        avatar: avatar9,
        victories: 22,
        vote: false
      },
      {
        id: 3,
        username: 'Juliette',
        avatar: avatar10,
        victories: 20,
        vote: true
      },
      {
        id: 4,
        username: 'Aurélien',
        avatar: avatar11,
        victories: 19,
        vote: true
      },
      {
        id: 5,
        username: 'Clémentine',
        avatar: avatar12,
        victories: 18,
        vote: false
      },
      {
        id: 6,
        username: 'Tada',
        avatar: avatar13,
        victories: 17,
        vote: false
      },
      {
        id: 7,
        username: 'Greta',
        avatar: avatar14,
        victories: 17,
        vote: false
      },
      {
        id: 8,
        username: 'Veronica',
        avatar: avatar15,
        victories: 17,
        vote: true
      },
      {
        id: 9,
        username: 'Thomas',
        avatar: avatar16,
        victories: 16,
        vote: true
      },
      {
        id: 10,
        username: 'Marie',
        avatar: avatar17,
        victories: 13,
        vote: true
      },
      {
        id: 11,
        username: 'Juba',
        avatar: avatar18,
        victories: 12,
        vote: false
      },
      {
        id: 12,
        username: 'Vincent',
        avatar: avatar19,
        victories: 12,
        vote: true
      }
    ]
  }

  render () {
    return (
      <div className='window-ListParticipantsVote scrollbar-ListParticipantsVote'>
        {this.state.user.map((user, i) => (
          <div key={i} className='div-participants-ListParticipantsVote'>
            <div className='margin-div-participant-ListParticipantsVote'>
              <img className='img-attendee-list-ListParticipantsVote' src={user.avatar} alt='avatar' />
            </div>
            <div className='margin-p-div-participant-ListParticipantsVote'>
              <p className='p-margin-div-participant-ListParticipantsVote'>{user.username}</p>
            </div>
            <div className='margin-fa-trophy-ListParticipantsVote'>
              <i className='fas fa-trophy fa-trophy-ListParticipantsVote'><p className='p-user-victories-trophy-ListParticipantsVote'>{user.victories}</p></i>
            </div>
            <div className='margin-fa-check-ListParticipantsVote'>
              <i className={user.vote ? 'fas fa-check fa-check-ListParticipantsVote' : ''} />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ListParticipantsVote
