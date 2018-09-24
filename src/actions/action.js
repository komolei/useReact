import * as types from './action_type'

export const changeInfo = (text) => ({ type: types.CHANGEINFO, params: text })

export const alert_fail = text => ({ type: types.FETCH_FAILED, params: text })
export const alert_succeed = text => ({ type: types.FETCH_SUCCEEDED, params: text })

export const singUp_succeed = text => ({ type: types.SINGUP_SUCCEED, params: text })
import api from '../fetch/api'
import req from '../fetch/req'
// update 2018.8.25

export const getSlidePhoto = (params) => async (dispatch) => {

    console.log(222222222222);
    try {
        console.log(11111111111111111);
        const res = await api.querySlideshowByStore(params)
        dispatch(changeInfo(res))
    } catch (error) {
        console.log('error is', error);
        // dispatch()
    }
}

// sign up 

export const signUp = params => async dispatch => {
    try {
        const res = await req.signUp(params)
        console.log('sign up result is', res);
        await dispatch(alert_succeed(res))
        await dispatch(singUp_succeed(res))
    } catch (e) {
        console.log('sign up error is', e);
        dispatch(alert_fail(e))
    }
}