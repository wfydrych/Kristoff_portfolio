import React, {Component, Fragment} from 'react'
import './Experience.sass'
import bg1 from './img/exp_bg1.png'
import bg2 from './img/exp_bg2.png'
import bg3 from './img/exp_bg3.png'
import bg4 from './img/exp_bg4.png'
import left from './img/chevron-left.png'
import right from './img/chevron-right.png'

let i = 1

const slider = e => {
        const bg1 = document.getElementById('bg1')
        const bg2 = document.getElementById('bg2')
        const bg3 = document.getElementById('bg3')
        const bg4 = document.getElementById('bg4')
        const dot1 = document.getElementById('1')
        const dot2 = document.getElementById('2')
        const dot3 = document.getElementById('3')
        const dot4 = document.getElementById('4')

        let slide

        if (e.target.id === 'prev') {
            if (bg1.style.display !== 'none') slide = '4'
            else if (bg2.style.display !== 'none') slide = '1'
            else if (bg3.style.display !== 'none') slide = '2'
            else if (bg4.style.display !== 'none') slide = '3'
        }

        else if (e.target.id === 'next') {
            if (bg1.style.display !== 'none') slide = '2'
            else if (bg2.style.display !== 'none') slide = '3'
            else if (bg3.style.display !== 'none') slide = '4'
            else if (bg4.style.display !== 'none') slide = '1'
        }

        else slide = e.target.id

        bg1.style.display = 'none'
        bg2.style.display = 'none'
        bg3.style.display = 'none'
        bg4.style.display = 'none'
        dot1.style.backgroundColor = '#858585'
        dot2.style.backgroundColor = '#858585'
        dot3.style.backgroundColor = '#858585'
        dot4.style.backgroundColor = '#858585'

    if (slide === '1') {
        bg1.style.display = 'block'
        dot1.style.backgroundColor = 'white'
    }

    else if (slide === '2') {
        bg2.style.display = 'block'
        dot2.style.backgroundColor = 'white'
    }

    else if (slide === '3') {
        bg3.style.display = 'block'
        dot3.style.backgroundColor = 'white'
    }

    else if (slide === '4') {
        bg4.style.display = 'block'
        dot4.style.backgroundColor = 'white'
    }
}

const Experience = () => {
    return (
    <Fragment>
      <div id='experience' className='experience'>
        <div className='experience__dot'></div>
        <div className='experience__title'>Doświadczenie</div>
        <div className='experience__container'>
            <img className='experience__left' id='prev' onClick={slider.bind(this)} src={left} alt='arrow-left' />
            <img className='experience__bg' id='bg1' src={bg1} alt='background' />
            <img className='experience__bg' id='bg2' src={bg2} alt='background' />
            <img className='experience__bg' id='bg3' src={bg3} alt='background' />
            <img className='experience__bg' id='bg4' src={bg4} alt='background' />
            <img className='experience__right' id='next' onClick={slider.bind(this)} src={right} alt='arrow-right' />
        </div>
        <div className='experience__dots'>
            <div className='experience__dots__dot' id='1' onClick={slider.bind(this)}></div>
            <div className='experience__dots__dot' id='2' onClick={slider.bind(this)}></div>
            <div className='experience__dots__dot' id='3' onClick={slider.bind(this)}></div>
            <div className='experience__dots__dot' id='4' onClick={slider.bind(this)}></div>
        </div>
      </div>
    </Fragment>
    )
  }

const autoSwitch = () => {
    const bg1 = document.getElementById('bg1')
    const bg2 = document.getElementById('bg2')
    const bg3 = document.getElementById('bg3')
    const bg4 = document.getElementById('bg4')
    const dot1 = document.getElementById('1')
    const dot2 = document.getElementById('2')
    const dot3 = document.getElementById('3')
    const dot4 = document.getElementById('4')
        bg1.style.display = 'none'
        bg2.style.display = 'none'
        bg3.style.display = 'none'
        bg4.style.display = 'none'
        dot1.style.backgroundColor = '#858585'
        dot2.style.backgroundColor = '#858585'
        dot3.style.backgroundColor = '#858585'
        dot4.style.backgroundColor = '#858585'

    if (i === 1) {
        bg1.style.display = 'block'
        dot1.style.backgroundColor = 'white'
    }

    else if (i === 2) {
        bg2.style.display = 'block'
        dot2.style.backgroundColor = 'white'
    }

    else if (i === 3) {
        bg3.style.display = 'block'
        dot3.style.backgroundColor = 'white'
    }

    else if (i === 4) {
        bg4.style.display = 'block'
        dot4.style.backgroundColor = 'white'
    }
      i++
      if (i===5) i=1
      setTimeout(autoSwitch, 5000)
}

document.addEventListener('DOMContentLoaded', autoSwitch, false)

export default Experience