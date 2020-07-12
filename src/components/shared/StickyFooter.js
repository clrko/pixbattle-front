import React from 'react'
import { NavLink } from 'react-router-dom'
import './StickyFooter.css'

const StickyFooter = () => {
  return (
    <div className='div-StickyFooter'>
      <NavLink to='/:username/battles' className='div-camera-StickyFooter'>
        <i className='fa fa-camera' />
        <p>Battles</p>
      </NavLink>
      <NavLink to='/:username/groups' className='div-users-StickyFooter'>
        <i className='fa fa-users' />
        <p>Groupes</p>
      </NavLink>
      <NavLink to='/:username' className='div-user-StickyFooter'>
        <i className='fa fa-user-circle' />
        <p>Profil</p>
      </NavLink>
    </div>
  )
}

export default StickyFooter
