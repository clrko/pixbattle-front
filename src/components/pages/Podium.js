import React from 'react'
import axios from 'axios'
import Navbar from '../shared/Navbar'
import StickyFooter from '../shared/StickyFooter'
import avatar from '../../asset/pictures/avatar_MyProfile.png'
import avatar2 from '../../asset/pictures/avatar2.png'
import avatar3 from '../../asset/pictures/avatar3.png'
import avatar4 from '../../asset/pictures/avatar4.png'

import './Podium.css'

class Podium extends React.Component {
  handleCreateGroupe = e => {
    e.preventDefault()
    const { history } = this.props
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/group-creation`,
        {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        }
      )
      .then(res => {
        const groupId = res.data.groupId
        history.push({
          pathname: `/newgroup/${groupId}`
        })
      })
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className='DropDown-Podium' />
        <div className='div-AvatarPodium'>
          <div className='div-center-AvatarPodium'>
            <div className='AvatarPodium second-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>Martin</p>
                <i class='fas fa-star' />
              </div>
              <div className='div-img-Avatar1'>
                <img className='img-avatar-position' src={avatar} alt='avatar' />
              </div>
              <i class='fas fa-medal medal1' />
            </div>
            <div className='AvatarPodium first-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>Marie</p>
                <i class='fas fa-star' />
              </div>
              <div className='div-img-Avatar2'>
                <img className='img-avatar-position' src={avatar3} alt='avatar' />
              </div>
              <i class='fas fa-medal medal2' />
            </div>
            <div className='AvatarPodium third-position'>
              <div className='div-p-fas'>
                <p className='p-AvatarPodium'>Fred</p>
                <i class='fas fa-star' />
              </div>
              <div className='div-img-Avatar3'>
                <img className='img-avatar-position' src={avatar2} alt='avatar' />
              </div>
              <i class='fas fa-medal medal3' />
            </div>
          </div>
          <div className='div-congratulations'>
            <h1 className='h1-div-congratulations'>Félicitations Marie !</h1>
            <button className='button-createdNewGroup-MyProfile button-div-congratulations' onClick={this.handleCreateGroupe}>crée la prochaine battle</button>
          </div>
          <div className='div-attendee-list'>
            <div className='div-participant'>
              <div className='margin-div-participant'>
                <p className='p-div-participant'>4.</p>
              </div>
              <div className='margin-div-participant'>
                <img className='img-attendee-list' src={avatar4} alt='avatar' />
              </div>
              <div className='margin-div-participant'>
                <p className='p-div-participant'>Jean</p>
              </div>
              <div className='margin-fa-start-attendee-list'>
                <i class='fas fa-star fa-start-attendee-list' />
              </div>
            </div>
            <div className='div-participant'>
              <div className='margin-div-participant'>
                <p className='p-div-participant'>5.</p>
              </div>
              <div className='margin-div-participant'>
                <img className='img-attendee-list' src={avatar4} alt='avatar' />
              </div>
              <div className='margin-div-participant'>
                <p className='p-div-participant'>Pierre</p>
              </div>
              <div className='margin-fa-start-attendee-list'>
                <i class='fas fa-star fa-start-attendee-list' />
              </div>
            </div>
            <div className='div-participant'>
              <div className='margin-div-participant'>
                <p className='p-div-participant'>6.</p>
              </div>
              <div className='margin-div-participant'>
                <img className='img-attendee-list' src={avatar4} alt='avatar' />
              </div>
              <div className='margin-div-participant'>
                <p className='p-div-participant'>Baptiste</p>
              </div>
              <div className='margin-fa-start-attendee-list'>
                <i class='fas fa-star fa-start-attendee-list' />
              </div>
            </div>
            <div className='div-participant'>
              <div className='margin-div-participant'>
                <p className='p-div-participant'>7.</p>
              </div>
              <div className='margin-div-participant'>
                <img className='img-attendee-list' src={avatar4} alt='avatar' />
              </div>
              <div className='margin-div-participant'>
                <p className='p-div-participant'>Aristide</p>
              </div>
              <div className='margin-fa-start-attendee-list'>
                <i class='fas fa-star fa-start-attendee-list' />
              </div>
            </div>
            <div className='div-participant'>
              <div className='margin-div-participant'>
                <p className='p-div-participant'>8.</p>
              </div>
              <div className='margin-div-participant'>
                <img className='img-attendee-list' src={avatar4} alt='avatar' />
              </div>
              <div className='margin-div-participant'>
                <p className='p-div-participant'>Gauthier</p>
              </div>
              <div className='margin-fa-start-attendee-list'>
                <i class='fas fa-star fa-start-attendee-list' />
              </div>
            </div>
            {/* <div className='div-participant'>
              <p className='p-div-participant'>2.</p>
              <img className='img-attendee-list' src={avatar4} alt='avatar'></img>
              <p className='p-div-participant'>Nicolas</p>
              <div className='div-star-attendee-list'>
                <i class="fas fa-star fa-start-attendee-list"></i>
              </div>
            </div>
            <div className='div-participant'>
              <p className='p-div-participant'>3.</p>
              <img className='img-attendee-list' src={avatar4} alt='avatar'></img>
              <p className='p-div-participant'>Gérard</p>
              <div>
                <i class="fas fa-star fa-start-attendee-list"></i>
              </div>
            </div>
            <div className='div-participant'>
              <p className='p-div-participant'>4.</p>
              <img className='img-attendee-list' src={avatar4} alt='avatar'></img>
              <p className='p-div-participant'>Pierre</p>
              <div>
                <i class="fas fa-star fa-start-attendee-list"></i>
              </div>
            </div>
            <div className='div-participant'>
              <p className='p-div-participant'>5.</p>
              <img className='img-attendee-list' src={avatar4} alt='avatar'></img>
              <p className='p-div-participant'>Antoine</p>
              <div>
                <i class="fas fa-star fa-start-attendee-list"></i>
              </div>
            </div>
            <div className='div-participant'>
              <p className='p-div-participant'>6.</p>
              <img className='img-attendee-list' src={avatar4} alt='avatar'></img>
              <p className='p-div-participant'>Aristide</p>
              <div>
                <i class="fas fa-star fa-start-attendee-list"></i>
              </div>
            </div>
            <div className='div-participant'>
              <p className='p-div-participant'>7.</p>
              <img className='img-attendee-list' src={avatar4} alt='avatar'></img>
              <p className='p-div-participant'>Florient</p>
              <div>
                <i class="fas fa-star fa-start-attendee-list"></i>
              </div>
            </div> */}
          </div>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default Podium
