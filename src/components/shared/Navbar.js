import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import logoLP from '../../asset/logo/logo.svg'
import avatar from '../../asset/pictures/avatar_MyProfile.png'
import './Navbar.css'

const Navbar = () => {
  const [redirect, setRedirect] = useState(false)

  const handleLogOut = () => {
    localStorage.removeItem('token')
    setRedirect(!redirect)
  }

  if (redirect) { return <Redirect to='/' /> }

  return (
    <div className='div-NavbarMobile'>
      <Link to='/MyProfile' className='link-logo'><img src={logoLP} className='logo-NavbarMobile' alt='Pix Battle Logo' /></Link>
      <div className='links-NavbarMobile'>
        <img className='avatar-NavbarMobile' src={avatar} alt='avatar' />
        <i className='fas fa-trophy star-icon-NavbarMobile'><p className='p-victory-point-NavbarMobile'>20</p></i>
        <div className='Logout'>
          <p className='p-Logout' onClick={handleLogOut}>Déconnexion</p>
        </div>
        <i className='fas fa-sign-out-alt' onClick={handleLogOut} />
      </div>
    </div>
  )
}

export default Navbar
