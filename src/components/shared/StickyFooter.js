import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './StickyFooter.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

const StickyFooter = ({ user }) => {
  return (
    <div className='div-StickyFooter'>
      <NavLink to={`/${user.username}/battles`} className='div-camera-StickyFooter fa fa-camera'>
        <p className='footer-title'>Battles</p>
      </NavLink>
      <NavLink to={`/${user.username}/groups`} className='div-users-StickyFooter fa fa-users'>
        <p className='footer-title'>Groupes</p>
      </NavLink>
      <NavLink to={`/${user.username}`} className='div-user-StickyFooter fa fa-user-circle'>
        <p className='footer-title'>Profil</p>
      </NavLink>
    </div>
  )
}

export default connect(mapStateToProps)(StickyFooter)
