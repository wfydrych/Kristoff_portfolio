import React, {Component, Fragment} from 'react'
import Menu from './Menu'
import Main from './Main'
import Skill from './Skill'
import Footer from './Footer'
import './Body.sass'

class Body extends Component {
    state = {}

    render() {
        return (
        <Fragment>
            <Main></Main>
            <Skill></Skill>
            <Menu></Menu>
            <Footer></Footer>
        </Fragment>
        );
      }}

export default Body
