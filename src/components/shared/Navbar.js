import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logoLP from '../../asset/logo/logo.svg'
import './Navbar.css'

const mapStateToProps = state => {
  const { user, profileInfos } = state
  return { user, profileInfos }
}

const Navbar = ({ user, profileInfos }) => {
  const [redirect, setRedirect] = useState(false)

  const handleLogOut = () => {
    localStorage.removeItem('token')
    setRedirect(!redirect)
  }

  if (redirect || !user) { return <Redirect to='/' /> }

  return (
    <div className='div-NavbarMobile'>
      <Link to='/:username' className='link-logo'><img src={logoLP} className='logo-NavbarMobile' alt='Pix Battle Logo' /></Link>
      <div className='links-NavbarMobile'>
        <img className='avatar-NavbarMobile' src={user.avatar} alt='avatar' />
        <i className='fas fa-trophy star-icon-NavbarMobile'><p className='p-victory-point-NavbarMobile'>{!profileInfos.infos ? '0' : profileInfos.infos.victories}</p></i>
        <div className='Logout'>
          <p className='p-Logout' onClick={handleLogOut}>Déconnexion</p>
        </div>
        <i className='fas fa-sign-out-alt' onClick={handleLogOut} />
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Navbar)
