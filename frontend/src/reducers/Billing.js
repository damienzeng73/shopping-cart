import { SET_BILLING_OPTIONS, CLEAR_BILLING_OPTIONS } from '../constants/ActionTypes'

const billing = (state={}, action={}) => {
    switch (action.type) {
        case SET_BILLING_OPTIONS:
            return {
                ...state,
                data: action.payload
            }

        case CLEAR_BILLING_OPTIONS:
            return {}

        default:
            return state
    }
}


export default billing
