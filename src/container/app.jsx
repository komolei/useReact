import React, { Component } from 'react';
import Test from  './test';

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