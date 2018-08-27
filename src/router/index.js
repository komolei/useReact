import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
// import App from '../container/app';
import AppLayout from '../layout/index';
const BasicRouter = () => (
    <Router>
        {/* <Route path='/' component={AppLayout} /> */}
        <AppLayout />

    </Router>
)
export default BasicRouter;