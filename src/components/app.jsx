import React, { Component } from 'react';
import ReactDom from 'react-dom'
// import _ from 'lodash';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './header'
import Bottom from './bottom';

// import Test from './test';
import Test from '../container/test'
import Nav from './nav';

import { hot } from 'react-hot-loader';

export default hot(module)(
    class App extends React.Component {

        render() {
            return (
                <div>
                    <Test />
                </div>
            )
        }
    }
) 