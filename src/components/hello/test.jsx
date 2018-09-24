import React, { Component } from 'react'
import { Modal, Button } from 'antd'

export default class Test extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: 'test component'
        }
        this.spanRef = React.createRef()
    }
    changeColor() {
        this.spanRef.current.style.color = 'red'
        
        console.log('-----------------1',this.iRef);
        // this.setState({
        //     name:this.iRef.value
        // })
        this.changeInputContent()
        this.iRef.defaultValue=this.iRef.value
    }
    changeInputContent(){
        this.setState(prevState=>{
            return{
                name:this.iRef.value
            }
        })
    }
    render() {
        const { name } = this.state
        const { age, sex, family,aj} = this.props
        return (
            <Modal title={name} visible>
                {age ? <span>{age}</span> : null}
                {sex ? <span>{sex}</span> : null}
                {family ? <span>{family}</span> : null}
                {aj ? <span>{aj}</span> : null}
                <span ref={this.spanRef}> show input content:</span>
                <input type='test' ref={inputRef => this.iRef = inputRef}  />

                <Button onClick={e=>this.changeColor()}>show something</Button>
            </Modal>

        )
    }
}