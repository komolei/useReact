import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, bindActionCreators } from "redux";

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
const newReducers = (preState = { age: 11 }, action) => {
    // return Object.assign(preState, action)
    switch (action.type) {
        case 'SINGUP_SUCCEED':
            return { ...preState, age: action.params.age }
            break;
        default:
            return preState
            break;
    }
}



let logger = action => (console.log('this.action is', action));


// true middleware 
let trueLogger = store => next => action => {
    console.log('this.action is2', action);
    next(action)
}
const s = createStore(newReducers,
    compose(
        applyMiddleware(trueLogger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
let _dispatch = s.dispatch
let newDispatch = (action) => {
    logger(action)
    _dispatch(action)
}
let count = 0;
s.subscribe(() => {
    console.log('this.subscribe is', `${++count}`);
})
let action1 = () => ({ type: 'SINGUP_SUCCEED', params: { age: 222 } })
// s.dispatch({ type: 'SINGUP_SUCCEED', params: { age: 222 } })
// s.dispatch({ type: 'SINGUP_SUCCEED', params: { age: 1222 } })
// s.dispatch({ type: 'SINGUP_SUCCEED', params: { age: 2222 } })

let action2 = () => ({ type: 'SINGUP_SUCCEED', params: { age: 2222 } })
let wrapped = bindActionCreators({
    action1, action2
}, newDispatch)

wrapped.action1();
console.log('this.wrapped is', wrapped);


window.vm = s;
window.mtd = wrapped;
console.log('this.store', s.getState())

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