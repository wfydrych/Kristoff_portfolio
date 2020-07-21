import React, {Component, Fragment} from 'react'
import './Skills.sass'

const Skills = () => {
    return (
    <Fragment>
      <div className='skills'>
        <span className='skills__dot'></span>
        <span className='skills__title'>Umiejętności</span>
        <div className='skills__mainbox'>
            <div className='skills__mainbox__box'>
                <span className='skills__mainbox__box__title'>Terapia manualna</span>
                <span className='skills__mainbox__box__description'>Opis cudownej metody leczącej wszystko co tylko przyjdzie Ci do głowy... I do nóg też.</span>
                <span className='skills__mainbox__box__more'>Przeczytaj więcej...</span>
            </div>
            <div className='skills__mainbox__box'>
                <span className='skills__mainbox__box__title'>Igłoterapia</span>
                <span className='skills__mainbox__box__description'>Opis cudownej metody leczącej wszystko co tylko przyjdzie Ci do głowy... I do nóg też.</span>
                <span className='skills__mainbox__box__more'>Przeczytaj więcej...</span>
            </div>
            <div className='skills__mainbox__box'>
                <span className='skills__mainbox__box__title'>Fascial manipulation</span>
                <span className='skills__mainbox__box__description'>Opis cudownej metody leczącej wszystko co tylko przyjdzie Ci do głowy... I do nóg też.</span>
                <span className='skills__mainbox__box__more'>Przeczytaj więcej...</span>
            </div>
            <div className='skills__mainbox__box'>
                <span className='skills__mainbox__box__title'>Osteopatyczna diagnostyka i leczenie</span>
                <span className='skills__mainbox__box__description'>Opis cudownej metody leczącej wszystko co tylko przyjdzie Ci do głowy... I do nóg też.</span>
                <span className='skills__mainbox__box__more'>Przeczytaj więcej...</span>
            </div>
        </div>
      </div>
    </Fragment>
    )
  }

export default Skills