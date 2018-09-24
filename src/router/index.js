import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
// import App from '../container/app';
import AppLayout from '../layout/index';
import Index from '../layout/signUpAndLogOut'

const BasicRouter = () => (
    <Router>
        {/* <Route path='/' component={AppLayout} /> */}
        <Index />
        {/* <AppLayout /> */}

    </Router>
)

// 增加路由拦截功能


export default BasicRouter;