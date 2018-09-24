import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Button, message } from 'antd';

import './signUp.scss'

export default class signUp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'sign up',
            init: {
                name: 'komoleiddxx',
                password: '123456'
            }
        }
    }
    handlerClick = e => {
        e.preventDefault()
        this.props.onClick(this.state.init)
    }
    success = () => {
        const hide = message.loading('Action in progress..', 0);
        // Dismiss manually and asynchronously
        setTimeout(hide, 2500);
    };
    render() {
        const { name } = this.state;
        const { info } = this.props;
        return <div className='signUp'>
            <span>{name}</span>
            <p>----</p>
            <span>{info}</span>
            <Button onClick={this.handlerClick}>sign up</Button>
            <Button onClick={this.success}>message</Button>
        </div>
    }
}