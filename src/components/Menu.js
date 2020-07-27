import React, {Component, Fragment} from 'react'
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

const mainredirrect = () => {
    const menu = document.getElementsByClassName('menu-mobile__container')
    const btn = document.getElementsByClassName('menu-mobile__btn')
    const arrow = document.getElementsByClassName('menu-mobile__btn2')
    const bg = document.getElementsByClassName('menu-mobile__bg')
    menu[0].style.display = 'none'
    arrow[0].style.display = 'none'
    btn[0].style.display = 'block'
    bg[0].style.display = 'none'
}

const Menu = () => {
    return (
    <Fragment>
      <div className='menu'>
        <a href='#hero' className='menu__logo'><img src={logo} alt='logo'/></a>
        <nav>
            <a href='#about'><span className='menu__links'>Kim jestem</span></a>
            <a href='#experience'><span className='menu__links'>Doświadczenie</span></a>
            <a href='#skills'><span className='menu__links'>Umiejętności</span></a>
            <a href='#contact'><span className='menu__links'>Kontakt</span></a>
        </nav>
        <a href="https://www.facebook.com/profile.php?id=100000683508078" target="_blank"><img className='menu__social' src={facebook} alt='facebook'/></a>
        <a href="https://www.instagram.com/kris_jakk/" target="_blank"><img className='menu__social' src={instagram} alt='instagram'/></a>
      </div>
      <div className='menu-mobile'>
            <a href='#hero' className='menu-mobile__logo' onClick={mainredirrect}><img src={logo} alt='logo-mobile'/></a>
            <img className='menu-mobile__btn' onClick={showmenu} id='menuicon' src={menubtn} alt='menu-mobile'/>
            <img className='menu-mobile__btn2' onClick={showmenu} id='menuarrow' src={arrow} alt='menu-mobile'/>
            <div className='menu-mobile__bg'></div>
            <div className='menu-mobile__container'>
                <a href='#about' onClick={showmenu}><span className='menu-mobile__container__links'>Kim jestem</span></a>
                <a href='#experience' onClick={showmenu}><span className='menu-mobile__container__links'>Doświadczenie</span></a>
                <a href='#skills' onClick={showmenu}><span className='menu-mobile__container__links'>Umiejętności</span></a>
                <a href='#contact' onClick={showmenu}><span className='menu-mobile__container__links'>Kontakt</span></a>
            </div>
      </div>
    </Fragment>
    )
  }

  export default Menu