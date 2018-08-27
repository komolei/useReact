import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import api from '../fetch/api'
export function* helloSaga() {
    yield delay(1000);
    console.log('Hello Sagas!');
    yield console.log('ssssssssssssxx');
    const res = yield api.querySlideshowByStore({ sellerId: 1, storeId: 1 })
    console.log('res is',res);
}