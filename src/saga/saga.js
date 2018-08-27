import { delay } from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import api from '../fetch/api';
import { changeInfo } from '../actions/action';
function* fetchInfo(action) {
    
    try {
        console.log('action params is', action);
        yield put({ type: 'FETCH_BEGIN' })
        const info = yield call(api.querySlideshowByStore, action.payload.params);
        console.log('INFO IS', info);
        yield put({ type: 'FETCH_SUCCEEDED', params: info })

    } catch (e) {
        console.log('eeeeeeeee', e, '00000000000');
        yield put({ type: 'FETCH_FAILED', message: 'network error' })

    }
}

function* mySagas() {
    yield takeEvery('FETCH_REQUEST', fetchInfo);
}

export default mySagas;







// function codingMan(name) {
//     function Man(name) {
//         setTimeout(() => {
//             console.log(`Hi! This is ${name}`);
//         }, 0);
//     }
//     Man.prototype.sleep = function (time) {
//         let curringTime = new Date()
//         let delayTime = time * 1000
//         setTimeout(() => {
//             while (new Date() - curringTime < delayTime) {
//             }
//             console.log(`Wake up after${time}`)

//         }, 0);
//         return this;
//     }
//     Man.prototype.eat = function (food) {
//         setTimeout(() => {
//             console.log(`Eat ${food}`)
//         }, 0);
//         return this;
//     }
//     Man.prototype.sleepFirst = function (time) {
//         let date = new Date()
//         let delayTime = time * 1000
//         while (new Date() - date > delayTime) {
//         }
//         console.log(`Wake up after${time}`)
//         return this;
//     }
//     return new Man(name);
// }