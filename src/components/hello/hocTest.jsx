import React, { Component } from 'react'
import Test from './test'
import Tests from './test2'
const hoc = (WrappedComponent) => {
    return class extends Component {
        render() {
            const newProps = {
                family1: 'chen'
            }
            const { sex, ...other } = this.props;
            return <WrappedComponent {...other} {...newProps} />
        }
    }
}

export default hoc(Tests)