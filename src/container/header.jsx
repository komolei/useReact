import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import style from './header.scss'
// require('./header.scss');
// const style = require('../scss/header.scss');

// import _ from 'lodash';
import { cube } from '../tools/math';


if(process.env.NODE_ENV!=='production'){
    console.log('Looks like we are in development mode');
}

export default class SayName extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: 'komolei',
            sex: props.sex
        }
        // this.change = this.change.bind(this)
    }
    // change() {
    //     this.setState({
    //         name: 'another komolei',
    //     })
    // };

    change = () => {
        this.setState({
            name: 'another komolei'
        })
    }
    add = () => {
        this.setState({
            sex: Number(this.state.sex) + cube(4)
        })
    }
    render() {
        const { name, sex } = this.state
        return <div className={style.c}>
            <p>{name}</p>
            <p>{sex}</p>
            <button onClick={e => this.change()}>change name1</button>
            <button onClick={this.change}>change name2</button>
            <button onClick={this.add}>add</button>
        </div>
    }
}