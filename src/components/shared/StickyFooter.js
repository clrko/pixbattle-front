import React from 'react'
import './StickyFooter.css'

const StickyFooter = () => {
  return (
    <div className='div-StickyFooter'>
      <div className='div-camera-StickyFooter'>
        <i className='fa fa-camera' />
        <p>Battles</p>
      </div>
      <div className='div-users-StickyFooter'>
        <i className='fa fa-users' />
        <p>Groupes</p>
      </div>
      <div className='div-user-StickyFooter'>
        <i className='fa fa-user-circle' />
        <p>Profil</p>
      </div>
    </div>
  )
}

export default StickyFooter
