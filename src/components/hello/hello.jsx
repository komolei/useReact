import React, { Component } from 'react'

export default class Hello extends Component {
    constructor (props) {
        super(props);
        this.state = {
            alias: 'hello component'
        }
    }
    render() {
        const { name, age, sex ,content} = this.props;
        console.log('this.hello component is', this.props)
        const { alias } = this.state;
        return (
            <div>
                <span>{alias} </span>
                <br />
                <span>name:{name}</span>
                <br />
                <span>age:{age}</span>
                <br />
                <span>sex:{sex}</span>
                {content}
                <br />
                <button onClick={e=>this.props.changeContent()}>changeContent</button>
                {this.props.family ?
                    <span>family:{this.props.family ? this.props.family : ''}</span> : null
                }
            </div>
        )
    }
}

