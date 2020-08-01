import React, {Component, Fragment} from 'react'
import skill_logo from './img/skilltitle.png'
import './Skill.sass'

const Skill = () => {
    return (
    <Fragment>
        <div id='skill' className='skill'>
            <div className='skill__title'>
                <div className='skill__title__txt'>Rehabilitacja ortopedyczna</div>
                <img src={skill_logo} className='skill__title__logo' alt='logo'/>
            </div>
            <div className='skill__description'>
                <strong>Rehabilitacja medyczna (rehabilitacja lecznicza)</strong> – kompleksowe i zespołowe działanie na rzecz osoby niepełnosprawnej fizycznie lub psychicznie (lub z deficytem w ww. obszarach), które ma na celu przywrócenie tej osobie pełnej lub maksymalnej do osiągnięcia <strong>sprawności fizycznej</strong> lub <strong>psychicznej</strong>.
            </div>
            <div className='skill__boxes'>
                <div className='skill__boxes__left'>
                    <span className='skill__boxes__title skill__boxes__title__left'>Dla kogo?</span>
                    <div className='skill__boxes__txt skill__boxes__title__left'>
                        <ul>
                            <li>Osoby po urazach ze złamaniem</li>
                            <li>Pater noster qui es in caelis</li>
                            <li>Sanctificetur nomen tuum adveniat regnum</li>
                            <li>Tuum, fiat voluntas tua, sicut in celo et in tera</li>
                            <li>Panem nostrum quotidianum da nobis</li>
                            <li>Hodie, et debitoribus debita nostra</li>
                        </ul>
                    </div>
                </div>
                <div className='skill__boxes__right'>
                    <span className='skill__boxes__title skill__boxes__title__right'>Jakimi technikami leczę?</span>
                    <div className='skill__boxes__txt skill__boxes__title__right'>
                        <ul>
                            <li>Osoby po urazach ze złamaniem</li>
                            <li>Pater noster qui es in caelis</li>
                            <li>Sanctificetur nomen tuum adveniat regnum</li>
                            <li>Tuum, fiat voluntas tua, sicut in celo et in tera</li>
                            <li>Panem nostrum quotidianum da nobis</li>
                            <li>Hodie, et debitoribus debita nostra</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
  }

export default Skill