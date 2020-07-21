import React, {Component, Fragment} from 'react'
import './Experience.sass'
import bg1 from './img/exp_bg1.png'
import left from './img/chevron-left.png'
import right from './img/chevron-right.png'
import dot from './img/switchdot.png'

const Experience = () => {
    return (
    <Fragment>
      <div className='experience'>
        <span className='experience__dot'></span>
        <span className='experience__title'>Doświadczenie</span>
        <img className='experience__bg' src={bg1} alt='background' />
        <img className='experience__left' src={left} alt='arrow-left' />
        <img className='experience__right' src={right} alt='arrow-right' />
        <div className='experience__dots'>
            <img className='experience__dots__dot' src={dot} alt='dot' />
            <img className='experience__dots__dot' src={dot} alt='dot' />
            <img className='experience__dots__dot' src={dot} alt='dot' />
            <img className='experience__dots__dot' src={dot} alt='dot' />
            <img className='experience__dots__dot' src={dot} alt='dot' />
        </div>
      </div>
    </Fragment>
    )
  }

export default Experience