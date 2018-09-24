import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hello from './hello'
const HOC = (Hello, newProps) => class SayHello extends React.Component {

    render() {
        const { name, ...ohter } = this.props;

        return <Hello {...ohter} {...newProps} ref={hi => this.storeRef = hi} />
    }
}

export default HOC(Hello,{family:'wang'});
