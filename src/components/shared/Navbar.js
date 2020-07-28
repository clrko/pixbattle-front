import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { LOGOUT } from '../../store/action-types'
import logoLP from '../../asset/logo/logo.svg'
import './Navbar.css'

const mapStateToProps = state => {
  const { user, profileInfos } = state
  return { user, profileInfos }
}

const Navbar = ({ user, profileInfos, dispatch, history }) => {
  const handleLogOut = () => {
    localStorage.removeItem('token')
    history.push('/')
    dispatch({ type: LOGOUT })
  }

  return (
    <div className='div-NavbarMobile'>
      <Link
        to={`/${user.username}`}
        className='link-logo'
      >
        <img
          src={logoLP}
          className='logo-NavbarMobile'
          alt='Pix Battle Logo'
        />
      </Link>
      <div className='links-NavbarMobile'>
        <img className='avatar-NavbarMobile' src={user.avatar} alt='avatar' />
        <span className='Navbar-trophy-wrapper'>
          <i className='fas fa-trophy Navbar-trophy-icon' />
          <span
            className='Navbar-victory-points'
          >
            {!profileInfos.infos ? '0' : profileInfos.infos.victories}
          </span>
        </span>
        <button
          type='button'
          className='btn-Logout'
          onClick={handleLogOut}
        >
          <span className='Logout-text'>Déconnexion</span>
          <i className='fas fa-sign-out-alt' />
        </button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(withRouter(Navbar))
