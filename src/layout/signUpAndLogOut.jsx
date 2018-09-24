import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';

import Hello from '../container/hello'
import SayHello from '../components/hello/sayHello'
import HocTest from '../components/hello/hocTest'

// import hoc from '../components/hello/hi';
// const SayHello = hoc(Hello)
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                {/* <SayHello age='22' name='komolei' sex='mela' /> */}
                {/* <HocTest age='25' sex='mela' /> */}
                <Hello/>
                <Row>
                    <Col xs={0} sm={4} md={8} lg={8} xl={10} xxl={10}></Col>
                    <Col xs={24} sm={16} md={6} lg={6} xl={3} xxl={3}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">Forgot password</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                        </Button>
                                Or <a href="">register now!</a>
                            </FormItem>
                        </Form>
                    </Col>
                    <Col xs={0} sm={4} md={8} lg={8} xl={10} xxl={10}></Col>
                </Row>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);

export default WrappedNormalLoginForm;