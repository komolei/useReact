import { FETCH_BEGIN, FETCH_FAILED } from "../actions/action_type";

const requestStatus = (state = { status: false }, action = {}) => {

    switch (action.type) {
        case FETCH_BEGIN:
            return {
                ...state, status: true,
            }
        default:
            return {
                ...state, status: false
            }
    }
}

export default requestStatus;