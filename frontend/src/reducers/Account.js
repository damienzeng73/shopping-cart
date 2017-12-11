import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE } from '../constants/ActionTypes'

const account = (state={}, action={}) => {
    switch (action.type) {
        case FETCH_ORDERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }

        case FETCH_ORDERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state

    }
}


export default account
