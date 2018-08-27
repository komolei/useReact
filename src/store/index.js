import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";

// import App from '../container/index';
import BasicRouter from '../router/index';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import reducers from '../reducers/index'
// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



// sage usage
// import createSagaMiddleware from 'redux-saga';

// import { helloSaga } from '../saga/hellosaga';
// import mySagas from '../saga/saga';
// const sagaMiddleware = createSagaMiddleware();

// const initStore = createStore(reducers, compose(applyMiddleware(sagaMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
// sagaMiddleware.run(mySagas);
// sage usage

// common usage

// const RootDom = ({ store = createStore(reducers, applyMiddleware(createSagaMiddleware(helloSaga)), 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) }) => (

// update 8.25 thunk usage

import thunk from 'redux-thunk';


const initStore = createStore(reducers, compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
// mount and render
const RootDom = ({ store = initStore }) => (
    <Provider store={store}>
        {/* <App /> */}
        <BasicRouter />
    </Provider>
)


export default RootDom;