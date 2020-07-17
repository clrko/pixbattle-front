import React from 'react'
// import Navbar from '../shared/Navbar'
import PageHeader from '../shared/PageHeader.js'
// import StickyFooter from '../shared/StickyFooter'
import './MyGroups.css'

class MyGroups extends React.Component {
  render () {
    return (
      <div className='background-MyGroups'>
        {/* <Navbar /> */}
        <PageHeader pageTitle='Mes Groupes' />
        <div className='MyGroups-cardList'>
          <div className='MyGroups-card'>
            <h2 className='MyGroups-card-title'>Team Pix Battle</h2>
            {/* <i className={userAdmin ? 'fas fa-crown MyGroups-crown' : 'MyGroups-notAdmin'} /> */}
            <p className='MyGroups-card-battle'>1 battle en cours</p>
            <p className='MyGroups-card-battle'>2 battles termines</p>
            <p className='MyGroups-card-member'>8 membres</p>
            <button className='MyGroups-card-button'>Voir</button>
          </div>
        </div>
        {/* <StickyFooter /> */}
      </div>
    )
  }
}

export default MyGroups
