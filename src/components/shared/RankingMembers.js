import React from 'react'
import avatar from '../../asset/pictures/avatar_MyProfile.png'
import avatar2 from '../../asset/pictures/avatar2.png'
import avatar3 from '../../asset/pictures/avatar3.png'
import avatar4 from '../../asset/pictures/avatar4.png'
import './RankingMembers.css'

class RankingMembers extends React.Component {
  state = {
    user: [
      {
        id: 1,
        username: 'Stéphane',
        avatar: avatar3,
        victories: 9
      },
      {
        id: 2,
        username: 'Taeg',
        avatar: avatar2,
        victories: 9
      },
      {
        id: 3,
        username: 'Aurélien',
        avatar: avatar4,
        victories: 9
      },
      {
        id: 4,
        username: 'Juliette',
        avatar: avatar,
        victories: 9
      },
      {
        id: 5,
        username: 'Clémentine',
        avatar: avatar4,
        victories: 9
      },
      {
        id: 6,
        username: 'Tada',
        avatar: avatar3,
        victories: 9
      },
      {
        id: 7,
        username: 'Greta',
        avatar: avatar3,
        victories: 9
      },
      {
        id: 8,
        username: 'Veronica',
        avatar: avatar3,
        victories: 9
      },
      {
        id: 9,
        username: 'Marie',
        avatar: avatar3,
        victories: 9
      },
      {
        id: 10,
        username: 'Thomas',
        avatar: avatar3,
        victories: 9
      },
      {
        id: 11,
        username: 'Abdou',
        avatar: avatar3,
        victories: 2
      },
      {
        id: 12,
        username: 'Benoît',
        avatar: avatar3,
        victories: 9
      }
    ]
  }

  render () {
    return (
      <div className='window-RankingMembers'>
        {this.state.user.map((user, i) => (
          <div key={i} className='div-participant'>
            <div className='margin-div-participant'>
              <p className='p-div-participant'>{user.id}.</p>
            </div>
            <div className='margin-div-participant'>
              <img className='img-attendee-list' src={user.avatar} alt='avatar' />
            </div>
            <div className='margin-div-participant'>
              <p className='p-div-participant'>{user.username}</p>
            </div>
            <div className='margin-fa-trophy-RankingMembers'>
              <i class='fas fa-trophy fa-trophy-RankingMembers'><p className='p-user-victories-trophy'>{user.victories}</p></i>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default RankingMembers
