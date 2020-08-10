import React, {Component, Fragment} from 'react'
import './Opinions.sass'

const Opinions = () => {
    return (
    <Fragment>
      <div id='opinions' className='opinions'>
        <div className='opinions__dot'></div>
        <div className='opinions__title'>Opinie</div>
        <span className='opinions__subtitle'>Z portalu ZnanyLekarz.pl</span>
        <div className='opinions__container'>
            <div className='opinions__subcontainer'>
                <div className='opinions__opinion'>
                    <div className='opinions__opinion__txt'>W pełni przygotowany do wykonania zadania. Przed przystąpieniem do leczenia - obszerny wywiad pozwalający na dokładne zbadanie problemu. Bogata wiedza medyczna przełożona na umiejętności. Klarowne wyjaśnienia przyczyn problemu, w sposób zrozumiały nawet dla dzieci. Skuteczne leczenie; potrafi znaleźć każdy najmniejszy punkt powodujący ból i zlikwidować go. Gorąco polecam!</div>
                    <div className='opinions__opinion__name'>Radosław</div>
                </div>
                <div className='opinions__opinion'>
                    <div className='opinions__opinion__txt'>Dobry specjalista i konkretny fizjoterapeuta. Zaangażowany w pracy z pacjentem korzystając z metod które są bardzo aktualne i niemniej skuteczne. Polecam serdecznie!</div>
                    <div className='opinions__opinion__name'>Dawid</div>
                </div>
                <div className='opinions__opinion'>
                    <div className='opinions__opinion__txt'>W pełni przygotowany do wykonania zadania. Przed przystąpieniem do leczenia - obszerny wywiad pozwalający na dokładne zbadanie problemu. Bogata wiedza medyczna przełożona na umiejętności. Klarowne wyjaśnienia przyczyn problemu, w sposób zrozumiały nawet dla dzieci. Skuteczne leczenie; potrafi znaleźć każdy najmniejszy punkt powodujący ból i zlikwidować go. Gorąco polecam!</div>
                    <div className='opinions__opinion__name'>Radosław</div>
                </div>
            </div>
            <div className='opinions__subcontainer'>
                <div className='opinions__opinion'>
                    <div className='opinions__opinion__txt'>Do pana Krzysztofa trafiłam z dokuczliwym bólem z powodu rwy kulszowej. W moim przypadku leczenie farmakologiczne okazało się nieskuteczne (25 zastrzyków i żadnej poprawy, nie pomagały leki przeciwzapalne). Dopiero zabiegi wykonywane przez p. Krzysztofa i zalecone ćwiczenia, przyniosły efekty i ból całkowicie ustąpił (dzięki terapii manualnej już po drugiej wizycie ból był mniejszy). P. Krzysztof na bieżąco oczekuje informacji o efektach terapii, czy boli, jaki rodzaj bólu, co powoduje, że dobiera odpowiednią metodę terapii. Z zaangażowaniem podchodzi do pacjenta. Bardzo uprzejmy, kompetentny, rzeczowy. Serdecznie polecam!</div>
                    <div className='opinions__opinion__name'>Aleksandra</div>
                </div>
                <div className='opinions__opinion'>
                    <div className='opinions__opinion__txt'>Dobry specjalista i konkretny fizjoterapeuta. Zaangażowany w pracy z pacjentem korzystając z metod które są bardzo aktualne i niemniej skuteczne. Polecam serdecznie!</div>
                    <div className='opinions__opinion__name'>Dawid</div>
                </div>
                <div className='opinions__opinion'>
                    <div className='opinions__opinion__txt'>W pełni przygotowany do wykonania zadania. Przed przystąpieniem do leczenia - obszerny wywiad pozwalający na dokładne zbadanie problemu. Bogata wiedza medyczna przełożona na umiejętności. Klarowne wyjaśnienia przyczyn problemu, w sposób zrozumiały nawet dla dzieci. Skuteczne leczenie; potrafi znaleźć każdy najmniejszy punkt powodujący ból i zlikwidować go. Gorąco polecam!</div>
                    <div className='opinions__opinion__name'>Radosław</div>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
    )
  }

export default Opinions