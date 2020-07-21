import React, {Component, Fragment} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import './Menu.sass'
import logo from './img/logo.png'
import logom from './img/logo_m.png'
import menubtn from './img/menu.png'
import facebook from './img/facebook.png'
import instagram from './img/instagram.png'

const Menu = () => {
    return (
    <Fragment>
      <div className='menu'>
        <img className='menu__logo' src={logo} alt='logo'/>
        <nav>
            <NavLink to='/about'><span className='menu__links'>Kim jestem</span></NavLink>
            <NavLink to='/skills'><span className='menu__links'>Umiejetnosci</span></NavLink>
            <NavLink to='/experience'><span className='menu__links'>Doswiadczenie</span></NavLink>
            <NavLink to='/contact'><span className='menu__links'>Kontakt</span></NavLink>
        </nav>
        <img className='menu__social' src={facebook} alt='facebook'/>
        <img className='menu__social' src={instagram} alt='instagram'/>
      </div>
      <div className='menu-mobile'>
            <img className='menu-mobile__logo' src={logom} alt='logo-mobile'/>
            <div className='menu-mobile__txt'>
                <span>Krzysztof Jakubiak</span>
                <span>mgr fizjoterapii</span>
            </div>
            <img className='menu-mobile__btn' src={menubtn} alt='menu-mobile'/>
      </div>
    </Fragment>
    )
  }

  export default withRouter(Menu)