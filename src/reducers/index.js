import { combineReducers } from 'redux';
import test from './test'
import requestStatus from './request'

const reducers = combineReducers({ test,requestStatus })
export default reducers;
