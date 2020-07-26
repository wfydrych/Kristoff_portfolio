import React, {Component, Fragment} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import './Menu.sass'
import logo from './img/logo.svg'
import menubtn from './img/menu.svg'
import facebook from './img/facebook.png'
import instagram from './img/instagram.png'

const Menu = () => {
    return (
    <Fragment>
      <div className='menu'>
        <NavLink to='/about' className='menu__logo'><img src={logo} alt='logo'/></NavLink>
        <nav>
            <NavLink to='/about'><span className='menu__links'>Kim jestem</span></NavLink>
            <NavLink to='/experience'><span className='menu__links'>Doświadczenie</span></NavLink>
            <NavLink to='/skills'><span className='menu__links'>Umiejętności</span></NavLink>
            <NavLink to='/contact'><span className='menu__links'>Kontakt</span></NavLink>
        </nav>
        <a href="https://www.facebook.com/profile.php?id=100000683508078" target="_blank"><img className='menu__social' src={facebook} alt='facebook'/></a>
        <a href="https://www.instagram.com/kris_jakk/" target="_blank"><img className='menu__social' src={instagram} alt='instagram'/></a>
      </div>
      <div className='menu-mobile'>
            <NavLink to='/about' className='menu-mobile__logo'><img src={logo} alt='logo-mobile'/></NavLink>
            <img className='menu-mobile__btn' src={menubtn} alt='menu-mobile'/>
      </div>
    </Fragment>
    )
  }

  export default withRouter(Menu)