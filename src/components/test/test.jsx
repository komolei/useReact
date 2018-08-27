import React, { Component } from 'react'
import ReactDom from 'react-dom';

import { Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import './test.scss';
export default class test extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'test component',
            init: 1,
        }
    }

    add = () => {
        this.setState({ init: this.state.init += 1 })
    }

    handleClick = (e) => {
        e.preventDefault();
        // console.log('this.props are', this.props)
        // this.props.onClick(this.state.name);
        // this.props.onClick();
        // use thunk 
        let params = {
            sellerId: 1, storeId: 1
        };
        this.props.onClick(params)

    }
    handleChange = (e) => {
        // this.props.onClick(e.target.value);
        // this.setState({ name: e.target.value })
    }
    render() {
        const { name, init, age } = this.state;
        const { info, isShow } = this.props;
        return <div className='test'>
            <span>{info}</span>
            {isShow ? <Spin /> : ''}
            {/* <span>name is{name}</span> */}
            {/* <input type='text' defaultValue={info} onChange={this.handleChange} /> */}
            <Button onClick={this.handleClick}>click</Button>

        </div>
    }
}