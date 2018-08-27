// import { changeInfo } from '../actions/action';
import { CHANGEINFO, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/action_type';


const test = (state = { info: 'i am using redux', }, action = {}) => {
    switch (action.type) {

        
        case CHANGEINFO:
        // case FETCH_SUCCEEDED:
            // return Object.assign({}, state, {
            //     info: action.params
            // })
            return { ...state, info: action.params.size }
        case FETCH_FAILED:
            return {
                ...state, info: action.message
            }
        default:
            return state
    }
}


export default test;