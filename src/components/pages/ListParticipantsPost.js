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

import './ListParticipantsPost.css'

class ListParticipantsPost extends React.Component {
  state = {
    user: [
      {
        id: 1,
        username: 'Stéphane',
        avatar: avatar5,
        victories: 25,
        post: true
      },
      {
        id: 2,
        username: 'Taeg',
        avatar: avatar9,
        victories: 22,
        post: false
      },
      {
        id: 3,
        username: 'Juliette',
        avatar: avatar10,
        victories: 20,
        post: true
      },
      {
        id: 4,
        username: 'Aurélien',
        avatar: avatar11,
        victories: 19,
        post: true
      },
      {
        id: 5,
        username: 'Clémentine',
        avatar: avatar12,
        victories: 18,
        post: false
      },
      {
        id: 6,
        username: 'Tada',
        avatar: avatar13,
        victories: 17,
        post: false
      },
      {
        id: 7,
        username: 'Greta',
        avatar: avatar14,
        victories: 17,
        post: false
      },
      {
        id: 8,
        username: 'Veronica',
        avatar: avatar15,
        victories: 17,
        post: true
      },
      {
        id: 9,
        username: 'Thomas',
        avatar: avatar16,
        victories: 16,
        post: true
      },
      {
        id: 10,
        username: 'Marie',
        avatar: avatar17,
        victories: 13,
        post: true
      },
      {
        id: 11,
        username: 'Juba',
        avatar: avatar18,
        victories: 12,
        post: false
      },
      {
        id: 12,
        username: 'Vincent',
        avatar: avatar19,
        victories: 12,
        post: true
      }
    ]
  }

  render () {
    return (
      <div className='window-ListParticipantsPost scrollbar-ListParticipantsPost'>
        {this.state.user.map((user, i) => (
          <div key={i} className='div-participants-ListParticipantsPost'>
            <div className='margin-div-participant-ListParticipantsPost'>
              <img className='img-attendee-list-ListParticipantsPost' src={user.avatar} alt='avatar' />
            </div>
            <div className='margin-p-div-participant-ListParticipantsPost'>
              <p className='p-margin-div-participant-ListParticipantsPost'>{user.username}</p>
            </div>
            <div className='margin-fa-trophy-ListParticipantsPost'>
              <i className='fas fa-trophy fa-trophy-ListParticipantsPost'><p className='p-user-victories-trophy-ListParticipantsPost'>{user.victories}</p></i>
            </div>
            <div className='margin-fa-image-ListParticipantsPost'>
              <i className={user.post ? 'far fa-image fa-image-ListParticipantsPost' : ''} />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ListParticipantsPost
