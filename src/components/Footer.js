import React, {Component, Fragment} from 'react'
import zn from './img/zn_footer.png'
import fb from './img/fb_footer.png'
import ig from './img/ig_footer.png'
import './Footer.sass'

const Footer = () => {
    return (
    <Fragment>
        <div className='footer'>
            <div className='footer__socials'>
                <span className='footer__title'>Znajdź mnie:</span>
                <div className='footer__socials__box'>
                    <a href="https://www.facebook.com/profile.php?id=100000683508078" target="_blank"><img src={fb} className='footer__socials__box__icon' alt='facebook' /></a>
                    <a href="https://www.instagram.com/kris_jakk/" target="_blank"><img src={ig} className='footer__socials__box__icon' alt='instagram' /></a>
                    <a href="https://www.znanylekarz.pl/krzysztof-jakubiak/fizjoterapeuta/zory" target="_blank"><img src={zn} className='footer__socials__box__icon' alt='znanylekarz' /></a>
                </div>
            </div>
            <div className='footer__special'>
                <span className='footer__title'>W czym się specjalizuję:</span>
                <div className='footer__special__txt'>Rehabilitacja ortopedyczna</div>
                <div className='footer__special__txt'>Rehabilitacja ortopedyczna</div>
                <div className='footer__special__txt'>Rehabilitacja ortopedyczna</div>
                <div className='footer__special__txt'>Rehabilitacja ortopedyczna</div>
            </div>
            <div className='footer__visit'>
                <span className='footer__title'>Umów sie na wizytę:</span>
                <div className='footer__visit__txt'>email: krzysztof@jakubiak.com</div>
                <div className='footer__visit__txt'>tel: 564 273 627</div>
                <div className='footer__visit__txt'><a href='https://www.znanylekarz.pl/krzysztof-jakubiak/fizjoterapeuta/zory'>Znany Lekarz</a></div>
            </div>
            <span className='footer__copyright'>2020 Copyright - Wojciech Fydrych, Design by - Dawid Wojtyczka</span>
        </div>
    </Fragment>
    )
  }

  export default Footer