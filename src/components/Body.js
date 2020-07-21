import React, {Component, Fragment} from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from './Menu'
import Main from './Main'
import './Body.sass'

class Body extends Component {
    state = {}

    render() {
        return (
        <Fragment>
            <BrowserRouter>
                <Menu></Menu>
                <Main></Main>
            </BrowserRouter>
        </Fragment>
        );
      }}

export default Body
