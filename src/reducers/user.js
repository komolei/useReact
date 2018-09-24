import { SINGUP_FAILED, SINGUP_SUCCEED } from '../actions/action_type'

const userInfo = (state = { info: '' }, action = {}) => {
    switch (action.type) {
        case SINGUP_SUCCEED:
            return Object.assign({}, state, {
                info: action.params
            })
        case SINGUP_FAILED:
            return {
                ...state, info: action.message
            }
        default:
            return state
    }

}

export default userInfo;