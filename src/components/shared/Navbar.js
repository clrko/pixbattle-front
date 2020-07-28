import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
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
      <img src={logoLP} className='logo-NavbarMobile' alt='Pix Battle Logo' />
      <div className='links-NavbarMobile'>
        <NavLink to={`/${user.username}`} className='link-logo'><img className='avatar-NavbarMobile' src={user.avatar} alt='avatar' /></NavLink>
        <i className='fas fa-trophy star-icon-NavbarMobile'><p className='p-victory-point-NavbarMobile'>{!profileInfos.infos ? '0' : profileInfos.infos.victories}</p></i>
        <div className='Logout'>
          <p className='p-Logout' onClick={handleLogOut}>Déconnexion</p>
        </div>
        <i className='fas fa-sign-out-alt' onClick={handleLogOut} />
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(withRouter(Navbar))
