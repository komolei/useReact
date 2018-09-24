// import { changeInfo } from '../actions/action';
import { FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/action_type';


const alert = (state = { info: 'alert something', }, action = {}) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return { ...state, info: action.params.name }
        case FETCH_FAILED:
            return {
                ...state, info: action.message
            }
        default:
            return state
    }
}

export default alert;