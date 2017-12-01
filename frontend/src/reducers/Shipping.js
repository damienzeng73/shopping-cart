import { SET_SHIPPING_OPTIONS, CLEAR_SHIPPING_OPTIONS } from '../constants/ActionTypes'

const shipping = (state={}, action={}) => {
    switch (action.type) {
        case SET_SHIPPING_OPTIONS:
            return {
                ...state,
                data: action.payload
            }

        case CLEAR_SHIPPING_OPTIONS:
            return {
                ...state,
                data: {
                    deliveryMethod: 'direct shipping'
                }
            }

        default:
            return state
    }
}


export default shipping
