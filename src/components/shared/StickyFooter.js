import React from 'react'
import './StickyFooter.css'

const StickyFooter = () => {
  return (
    <div className='div-StickyFooter'>
      <div className='div-camera-StickyFooter'>
        <i class='fa fa-camera fa-lg' />
        <p>Battles</p>
      </div>
      <div className='div-users-StickyFooter'>
        <i class='fa fa-users fa-lg' />
        <p>Groupes</p>
      </div>
      <div className='div-user-StickyFooter'>
        <i class='fa fa-user-circle fa-lg' />
        <p>Profil</p>
      </div>
    </div>
  )
}

export default StickyFooter
