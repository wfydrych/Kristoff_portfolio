import React, {Component, Fragment} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import './Menu.sass'
import logo from './img/logo.svg'
import menubtn from './img/menu.svg'
import arrow from './img/menu_arrow.png'
import facebook from './img/facebook.png'
import instagram from './img/instagram.png'

const showmenu = () => {
    const menu = document.getElementsByClassName('menu-mobile__container')
    const btn = document.getElementsByClassName('menu-mobile__btn')
    const arrow = document.getElementsByClassName('menu-mobile__btn2')
    const bg = document.getElementsByClassName('menu-mobile__bg')

    if (menu[0].style.display !== 'flex') {
        menu[0].style.display = 'flex'
        btn[0].style.display = 'none'
        arrow[0].style.display = 'block'
        bg[0].style.display = 'block'
    }

    else {
        menu[0].style.display = 'none'
        arrow[0].style.display = 'none'
        btn[0].style.display = 'block'
        bg[0].style.display = 'none'
    }
}

const Menu = () => {
    return (
    <Fragment>
      <div className='menu'>
        <NavLink to='/hero' className='menu__logo'><img src={logo} alt='logo'/></NavLink>
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
            <NavLink to='/hero' className='menu-mobile__logo' onClick={showmenu}><img src={logo} alt='logo-mobile'/></NavLink>
            <img className='menu-mobile__btn' onClick={showmenu} id='menuicon' src={menubtn} alt='menu-mobile'/>
            <img className='menu-mobile__btn2' onClick={showmenu} id='menuarrow' src={arrow} alt='menu-mobile'/>
            <div className='menu-mobile__bg'></div>
            <div className='menu-mobile__container'>
                <NavLink to='/about' onClick={showmenu}><span className='menu-mobile__container__links'>Kim jestem</span></NavLink>
                <NavLink to='/experience' onClick={showmenu}><span className='menu-mobile__container__links'>Doświadczenie</span></NavLink>
                <NavLink to='/skills' onClick={showmenu}><span className='menu-mobile__container__links'>Umiejętności</span></NavLink>
                <NavLink to='/contact' onClick={showmenu}><span className='menu-mobile__container__links'>Kontakt</span></NavLink>
            </div>
      </div>
    </Fragment>
    )
  }

  export default withRouter(Menu)