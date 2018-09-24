import { combineReducers } from 'redux';
import test from './test'
import requestStatus from './request'
import alert from './alert'
import userInfo from './user'
const reducers = combineReducers({ test, requestStatus, alert, userInfo })
export default reducers;
