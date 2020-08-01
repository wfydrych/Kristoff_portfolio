import React, {Component, Fragment} from 'react'
import './Contact.sass'
import phone from './img/phone.png'
import email from './img/email.png'
import lekarz from './img/znanylekarz.png'

const Contact = () => {
    return (
    <Fragment>
      <div id='contact' className='contact'>
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
        <div className='contact__doctor'>
            <a id="zl-url" class="zl-url" href="https://www.znanylekarz.pl/krzysztof-jakubiak/fizjoterapeuta/zory" rel="nofollow" 
            data-zlw-doctor="krzysztof-jakubiak" data-zlw-type="big" data-zlw-opinion="false" data-zlw-hide-branding="true">Krzysztof Jakubiak - ZnanyLekarz.pl</a>
            {
                function($_x,_s,id) {
                    var js,
                    fjs=$_x.getElementsByTagName(_s)[0]
                    if (!$_x.getElementById(id)) {
                        js = $_x.createElement(_s)
                        js.id = id
                        js.src = "//platform.docplanner.com/js/widget.js"
                        fjs.parentNode.insertBefore(js,fjs)
                    }
                }
            (document,"script","zl-widget-s")
            }
        </div>
    </div>
    </Fragment>
    )
  }

export default Contact