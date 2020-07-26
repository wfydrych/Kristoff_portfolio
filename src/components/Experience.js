import React, {Component, Fragment} from 'react'
import './Experience.sass'
import bg1 from './img/exp_bg1.png'
import bg2 from './img/exp_bg2.png'
import bg3 from './img/exp_bg3.png'
import bg4 from './img/exp_bg4.png'
import bg5 from './img/exp_bg5.png'
import left from './img/chevron-left.png'
import right from './img/chevron-right.png'

const slider = e => {
        const bg1 = document.getElementById('bg1')
        const bg2 = document.getElementById('bg2')
        const bg3 = document.getElementById('bg3')
        const bg4 = document.getElementById('bg4')
        const bg5 = document.getElementById('bg5')
        const dot1 = document.getElementById('1')
        const dot2 = document.getElementById('2')
        const dot3 = document.getElementById('3')
        const dot4 = document.getElementById('4')
        const dot5 = document.getElementById('5')

        let slide

        if (e.target.id === 'prev') {
            if (bg1.style.display !== 'none') slide = '5'
            else if (bg2.style.display !== 'none') slide = '1'
            else if (bg3.style.display !== 'none') slide = '2'
            else if (bg4.style.display !== 'none') slide = '3'
            else if (bg5.style.display !== 'none') slide = '4'
        }

        else if (e.target.id === 'next') {
            if (bg1.style.display !== 'none') slide = '2'
            else if (bg2.style.display !== 'none') slide = '3'
            else if (bg3.style.display !== 'none') slide = '4'
            else if (bg4.style.display !== 'none') slide = '5'
            else if (bg5.style.display !== 'none') slide = '1'
        }

        else slide = e.target.id

        bg1.style.display = 'none'
        bg2.style.display = 'none'
        bg3.style.display = 'none'
        bg4.style.display = 'none'
        bg5.style.display = 'none'
        dot1.style.border = '1px solid grey'
        dot2.style.border = '1px solid grey'
        dot3.style.border = '1px solid grey'
        dot4.style.border = '1px solid grey'
        dot5.style.border = '1px solid grey'

    if (slide === '1') {
        bg1.style.display = 'block'
        dot1.style.border = '1px solid white'
    }

    else if (slide === '2') {
        bg2.style.display = 'block'
        dot2.style.border = '1px solid white'
    }

    else if (slide === '3') {
        bg3.style.display = 'block'
        dot3.style.border = '1px solid white'
    }

    else if (slide === '4') {
        bg4.style.display = 'block'
        dot4.style.border = '1px solid white'
    }

    else if (slide === '5') {
        bg5.style.display = 'block'
        dot5.style.border = '1px solid white'
    }
}

const Experience = () => {
    return (
    <Fragment>
      <div className='experience'>
        <div className='experience__dot'></div>
        <div className='experience__title'>Doświadczenie</div>
        <img className='experience__bg' id='bg1' src={bg1} alt='background' />
        <img className='experience__bg' id='bg2' src={bg2} alt='background' />
        <img className='experience__bg' id='bg3' src={bg3} alt='background' />
        <img className='experience__bg' id='bg4' src={bg4} alt='background' />
        <img className='experience__bg' id='bg5' src={bg5} alt='background' />

        <img className='experience__left' id='prev' onClick={slider.bind(this)} src={left} alt='arrow-left' />
        <img className='experience__right' id='next' onClick={slider.bind(this)} src={right} alt='arrow-right' />
        <div className='experience__dots'>
            <div className='experience__dots__dot' id='1' onClick={slider.bind(this)}></div>
            <div className='experience__dots__dot' id='2' onClick={slider.bind(this)}></div>
            <div className='experience__dots__dot' id='3' onClick={slider.bind(this)}></div>
            <div className='experience__dots__dot' id='4' onClick={slider.bind(this)}></div>
            <div className='experience__dots__dot' id='5' onClick={slider.bind(this)}></div>
        </div>
      </div>
    </Fragment>
    )
  }

export default Experience