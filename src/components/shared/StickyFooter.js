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
      <NavLink to={`/${user.username}/battles`} className='div-camera-StickyFooter'>
        <i className='fa fa-camera' />
        <p>Battles</p>
      </NavLink>
      <NavLink to={`/${user.username}/groups`} className='div-users-StickyFooter'>
        <i className='fa fa-users' />
        <p>Groupes</p>
      </NavLink>
      <NavLink to={`/${user.username}`} className='div-user-StickyFooter'>
        <i className='fa fa-user-circle' />
        <p>Profil</p>
      </NavLink>
    </div>
  )
}

export default connect(mapStateToProps)(StickyFooter)
