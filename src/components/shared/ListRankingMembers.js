import React from 'react'
import avatar5 from '../../asset/pictures/avatar5.png'
import avatar6 from '../../asset/pictures/avatar6.png'
import avatar8 from '../../asset/pictures/avatar8.png'
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
import avatar22 from '../../asset/pictures/avatar22.png'
import avatar23 from '../../asset/pictures/avatar23.png'
import avatar24 from '../../asset/pictures/avatar24.png'
import avatar25 from '../../asset/pictures/avatar25.png'
import avatar26 from '../../asset/pictures/avatar26.png'
import avatar27 from '../../asset/pictures/avatar27.png'
import avatar28 from '../../asset/pictures/avatar28.png'
import avatar29 from '../../asset/pictures/avatar29.png'
import avatar31 from '../../asset/pictures/avatar31.png'
import avatar32 from '../../asset/pictures/avatar32.png'
import avatar33 from '../../asset/pictures/avatar33.png'
import avatar34 from '../../asset/pictures/avatar34.png'
import avatar36 from '../../asset/pictures/avatar36.png'
import avatar37 from '../../asset/pictures/avatar37.png'
import avatar38 from '../../asset/pictures/avatar38.png'
import avatar39 from '../../asset/pictures/avatar39.png'
import './ListRankingMembers.css'

class ListRankingMembers extends React.Component {
  state = {
    user: [
      {
        id: 1,
        username: 'Stéphane',
        avatar: avatar5,
        victories: 25
      },
      {
        id: 2,
        username: 'Taeg',
        avatar: avatar9,
        victories: 22
      },
      {
        id: 3,
        username: 'Juliette',
        avatar: avatar10,
        victories: 20
      },
      {
        id: 4,
        username: 'Aurélien',
        avatar: avatar11,
        victories: 19
      },
      {
        id: 5,
        username: 'Clémentine',
        avatar: avatar12,
        victories: 18
      },
      {
        id: 6,
        username: 'Tada',
        avatar: avatar13,
        victories: 17
      },
      {
        id: 7,
        username: 'Greta',
        avatar: avatar14,
        victories: 17
      },
      {
        id: 8,
        username: 'Veronica',
        avatar: avatar15,
        victories: 17
      },
      {
        id: 9,
        username: 'Thomas',
        avatar: avatar16,
        victories: 16
      },
      {
        id: 10,
        username: 'Marie',
        avatar: avatar17,
        victories: 13
      },
      {
        id: 11,
        username: 'Juba',
        avatar: avatar18,
        victories: 12
      },
      {
        id: 12,
        username: 'Vincent',
        avatar: avatar19,
        victories: 12
      },
      {
        id: 13,
        username: 'Audrey',
        avatar: avatar22,
        victories: 11
      },
      {
        id: 14,
        username: 'Loukman',
        avatar: avatar23,
        victories: 10
      },
      {
        id: 15,
        username: 'Mohamed',
        avatar: avatar24,
        victories: 10
      },
      {
        id: 16,
        username: 'Mamed',
        avatar: avatar27,
        victories: 9
      },
      {
        id: 17,
        username: 'Anais',
        avatar: avatar28,
        victories: 9
      },
      {
        id: 18,
        username: 'Sébastien',
        avatar: avatar31,
        victories: 9
      },
      {
        id: 19,
        username: 'Lena',
        avatar: avatar33,
        victories: 8
      },
      {
        id: 20,
        username: 'Jérôme',
        avatar: avatar34,
        victories: 8
      },
      {
        id: 21,
        username: 'Nicolas',
        avatar: avatar38,
        victories: 7
      },
      {
        id: 22,
        username: 'Veronica',
        avatar: avatar39,
        victories: 6
      },
      {
        id: 23,
        username: 'JP',
        avatar: avatar25,
        victories: 5
      },
      {
        id: 24,
        username: 'Marjolaine',
        avatar: avatar26,
        victories: 4
      },
      {
        id: 25,
        username: 'Tristan',
        avatar: avatar32,
        victories: 3
      },
      {
        id: 26,
        username: 'Walid',
        avatar: avatar36,
        victories: 2
      },
      {
        id: 27,
        username: 'Emily',
        avatar: avatar37,
        victories: 2
      },
      {
        id: 28,
        username: 'Margot',
        avatar: avatar6,
        victories: 1
      },
      {
        id: 29,
        username: 'Jérémie',
        avatar: avatar8,
        victories: 0
      },
      {
        id: 30,
        username: 'Guillaume',
        avatar: avatar29,
        victories: 0
      }
    ]
  }

  render () {
    return (
      <div className='window-RankingMembers scrollbar-ListRankingMembers'>
        {this.state.user.map((user, i) => (
          <div key={i} className='div-participants-RankingMembers'>
            <div className='margin-div-participant-RankingMembers'>
              <p className='p-div-participant-RankingMembers'>{user.id}.</p>
            </div>
            <div className='margin-div-participant-RankingMembers'>
              <img className='img-attendee-list-RankingMembers' src={user.avatar} alt='avatar' />
            </div>
            <div className='margin-p-div-participant-RankingMembers'>
              <p className='p-margin-div-participant-RankingMembers'>{user.username}</p>
            </div>
            <div className='margin-fa-trophy-RankingMembers'>
              <i class='fas fa-trophy fa-trophy-RankingMembers'><p className='p-user-victories-trophy-RankingMembers'>{user.victories}</p></i>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ListRankingMembers
