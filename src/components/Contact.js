import React, {Component, Fragment} from 'react'
import './Contact.sass'
import phone from './img/phone.png'
import email from './img/email.png'
import lekarz from './img/znanylekarz.png'

const Contact = () => {
    return (
    <Fragment>
      <div className='contact'>
        <div className='contact__dot'></div>
        <div className='contact__title'>Kontakt</div>
        <span className='contact__subtitle'>Skontaktuj się ze mną</span>
        <div className='contact__numbers'>
            <div className='contact__numbers__box'>
                <span>Zadzwoń do mnie:</span>
                <span><img src={phone} alt='phone'/>+48 564 785 342</span>
            </div>
            <div className='contact__numbers__box'>
                <span>Kontakt mailowy:</span>
                <span><img src={email} alt='email'/>krzysztof@jakubiak.pl</span>
            </div>
        </div>
        <img className='contact__doctor' src={lekarz} alt='znanylekarz' />
      </div>
    </Fragment>
    )
  }

export default Contact