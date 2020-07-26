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
    <footer className='StickyFooter'>
      <NavLink to={`/${user.username}/battles`} className='StickyFooter-link'>
        <i className='fa fa-camera' />
        <span className='footer-title'>Battles</span>
      </NavLink>
      <NavLink to={`/${user.username}/groups`} className='StickyFooter-link'>
        <i className='fa fa-users' />
        <span className='footer-title'>Groupes</span>
      </NavLink>
      <NavLink to={`/${user.username}`} exact className='StickyFooter-link'>
        <i className='fa fa-user-circle' />
        <span className='footer-title'>Profil</span>
      </NavLink>
    </footer>
  )
}

export default connect(mapStateToProps)(StickyFooter)
