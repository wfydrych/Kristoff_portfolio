import React, {Component, Fragment} from 'react'
import './Hero.sass'
import krzys from './img/krzys.png'

const Hero = () => {
    return (
    <Fragment>
      <div className='hero'>
        <span className='hero__circle'></span>
        <img className='hero__krzys' src={krzys} alt='krzys'/>
        <span className='hero__title'>Mgr Krzysztof Jakubiak</span>
        <span className='hero__subtitle'>Jestem fizjoterapeutą i absolwentem Śląskiego Uniwersytetu Medycznego w Katowicach.</span>
      </div>
    </Fragment>
    )
  }

export default Hero