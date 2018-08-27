import * as types from './action_type'

export const changeInfo = (text) => ({ type: types.CHANGEINFO, params: text })

import api from '../fetch/api'

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
