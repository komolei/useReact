import React, { Component } from 'react'

import Test from './test'

export default class Tests extends Test {
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div>xxx
                <Test aj='aj1'/>
            </div>
        )
    }
}