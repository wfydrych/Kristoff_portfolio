import React from 'react'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import Opinions from './Opinions'
import './Main.sass'

const Main = () => (
    <section id='main' className='main'>
        <Hero></Hero>
        <About></About>
        <Experience></Experience>
        <Skills></Skills>
        <Contact></Contact>
        <Opinions></Opinions>
    </section>
)

export default Main