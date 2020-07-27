import React, {Component, Fragment} from 'react'
import Menu from './Menu'
import Main from './Main'
import './Body.sass'

class Body extends Component {
    state = {}

    render() {
        return (
        <Fragment>
                <Main></Main>
                <Menu></Menu>
        </Fragment>
        );
      }}

export default Body
