import React, {Component, Fragment} from 'react'
import './Skills.sass'

const showSkill = () => {
    document.getElementById('skill').style.display = 'block'
    document.getElementById('main').style.display = 'none'
}

class Skills extends Component {
    

    render() {
        return (
        <Fragment>
        <div id='skills' className='skills'>
            <div className='skills__dot'></div>
            <div className='skills__title'>Umiejętności</div>
            <div className='skills__mainbox'>
                <div className='skills__mainbox__box'>
                    <span className='skills__mainbox__box__title'>Terapia manualna</span>
                    <span className='skills__mainbox__box__description'>Opis cudownej metody leczącej wszystko co tylko przyjdzie Ci do głowy... I do nóg też.</span>
                    <span className='skills__mainbox__box__space'></span>
                    <span onClick={showSkill} className='skills__mainbox__box__more'>Przeczytaj więcej...</span>
                </div>
                <div className='skills__mainbox__box'>
                    <span className='skills__mainbox__box__title'>Igłoterapia</span>
                    <span className='skills__mainbox__box__description'>Opis cudownej metody leczącej wszystko co tylko przyjdzie Ci do głowy... I do nóg też.</span>
                    <span className='skills__mainbox__box__space'></span>
                    <span onClick={showSkill} className='skills__mainbox__box__more'>Przeczytaj więcej...</span>
                </div>
                <div className='skills__mainbox__box'>
                    <span className='skills__mainbox__box__title'>Fascial manipulation</span>
                    <span className='skills__mainbox__box__description'>Opis cudownej metody leczącej wszystko co tylko przyjdzie Ci do głowy... I do nóg też.</span>
                    <span className='skills__mainbox__box__space'></span>
                    <span onClick={showSkill} className='skills__mainbox__box__more'>Przeczytaj więcej...</span>
                </div>
                <div className='skills__mainbox__box'>
                    <span className='skills__mainbox__box__title'>Osteopatyczna diagnostyka i leczenie</span>
                    <span className='skills__mainbox__box__description'>Opis cudownej metody leczącej wszystko co tylko przyjdzie Ci do głowy... I do nóg też.</span>
                    <span className='skills__mainbox__box__space'></span>
                    <span onClick={showSkill} className='skills__mainbox__box__more'>Przeczytaj więcej...</span>
                </div>
            </div>
        </div>
        </Fragment>
        )
    }
  }

export default Skills