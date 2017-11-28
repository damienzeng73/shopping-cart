import { SET_BILLING_OPTIONS } from '../constants/ActionTypes'

const billing = (state={}, action={}) => {
    switch (action.type) {
        case SET_BILLING_OPTIONS:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state
    }
}


export default billing
