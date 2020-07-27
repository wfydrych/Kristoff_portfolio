import React, {Component, Fragment} from 'react'
import './About.sass'

const About = () => {
    return (
    <Fragment>
      <div id='about' className='about'>
        <div className='about__dot'></div>
        <div className='about__title'>Kim jestem?</div>
        <div className='about__box'>
            <div className='about__box__line'><div id='line1'></div></div>
            <div className='about__box__circle'></div>
            <div className='about__box__txt'>Absolwentem Śląskiego Uniwersytetu Medycznego w Katowicach, magistrem fizjoterapii oraz terapeutą manualnym.</div>
        </div>
        <div className='about__box'>
            <div className='about__box__line'><div id='line2'></div></div>
            <div className='about__box__circle circlespecial'></div>
            <div className='about__box__txt'>Współpracownikiem drużyn siatkarskich, tj. Jastrzębski Węgiel, kadra narodowa Australii, kadra narodowa Finlandii.</div>
        </div>
        <div className='about__box'>
            <div className='about__box__line'><div id='line3'></div></div>
            <div className='about__box__circle'></div>
            <div className='about__box__txt'>Czynnym uczestnikiem licznych szkoleń z zakresu terapii manualnej i osteopatii prowadzonych przez światowej klasy specjalistów.</div>
        </div>
        <div className='about__box'>
            <div className='about__box__line'><div id='line4'></div></div>
            <div className='about__box__circle circlespecial'></div>
            <div className='about__box__txt'>Prywatnie jestem miłośnikiem biegania oraz kuchni włoskiej.</div>
        </div>
      </div>
    </Fragment>
    )
  }

export default About