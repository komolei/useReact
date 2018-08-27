import React, { Component } from 'react';
import ReactDom from 'react-dom'
// import _ from 'lodash';
export default class Bottom extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'bottom'
        }
    }
    changeName = () => this.setState({ name: 'change bottom2' });

    render() {
        const { name } = this.state;
        return <div>
            <p>{name}</p>
            <button onClick={this.changeName}>changeName</button>
        </div>
    }
}