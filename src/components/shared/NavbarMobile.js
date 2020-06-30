import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logoLP from '../../asset/logo/logo.svg'
import avatar from '../../asset/pictures/avatar_MyProfile.png'
import './NavbarMobile.css'

const NavbarMobile = () => {
  return (
    <div className='div-NavbarMobile'>
      <Link to='/MyProfile' className='link-logo'><img src={logoLP} className='logo-NavbarMobile' alt='Pix Battle Logo' /></Link>
      <div className='links-NavbarMobile'>
        <img className='avatar-NavbarMobile' src={avatar} alt='avatar' />
        <i className='fa fa-star star-icon-NavbarMobile'><p className='p-victory-point-NavbarMobile'>20</p></i>
        <div className='Logout'>
          <NavLink to='/'><p className='p-Logout'>Déconnexion</p></NavLink>
        </div>
        <i class='fas fa-sign-out-alt' />
      </div>
    </div>
  )
}

export default NavbarMobile
