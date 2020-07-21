import React from 'react'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import './Main.sass'
import {Route, Switch, withRouter} from 'react-router-dom'

const Main = () => (
    <section className='main'>
    <Switch>
            <Route 
                exact path='/' 
                render = {text => <About></About>}>
            </Route>
            <Route 
                path='/about' 
                render = {text => <About></About>}>
            </Route>
            <Route 
                path='/skills' 
                render = {text => <Skills></Skills>}>
            </Route>
            <Route 
                path='/experience' 
                render = {text => <Experience></Experience>}>
            </Route>
            <Route 
                path='/contact' 
                render = {text => <Contact></Contact>}>
            </Route>
        </Switch>
    </section>
)

export default withRouter(Main)