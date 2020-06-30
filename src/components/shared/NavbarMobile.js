import React from 'react'
import logoLP from '../../asset/logo/logo.svg'
import avatar from '../../asset/pictures/avatar_MyProfile.png'
import './NavbarMobile.css'

const NavbarMobile = () => {
  return (
    <div className='div-NavbarMobile'>
      <img src={logoLP} className='logo-NavbarMobile' alt='Pix Battle Logo' />
      <div className='links-NavbarMobile'>
        <img className='avatar-NavbarMobile' src={avatar} alt='avatar' />
        <i className='fa fa-star star-icon-NavbarMobile'><p className='p-victory-point-NavbarMobile'>20</p></i>
        <i class='fas fa-sign-out-alt' />
      </div>
    </div>
  )
}

export default NavbarMobile
