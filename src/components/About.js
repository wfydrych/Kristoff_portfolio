import React, {Component, Fragment} from 'react'
import './About.sass'
import bg from './img/bg.png'
import krzys from './img/krzys.png'

const Menu = () => {
    return (
    <Fragment>
      <div className='about'>
        <img className='about__bg' src={bg} alt='background'/>
        <span className='about__circle'></span>
        <img className='about__krzys' src={krzys} alt='krzys'/>
        <span className='about__title'>Mgr Krzysztof Jakubiak</span>
        <span className='about__subtitle'>Jestem fizjoterapeutą i absolwentem Śląskiego Uniwersytetu Medycznego w Katowicach.</span>
      </div>
    </Fragment>
    )
  }

export default Menu