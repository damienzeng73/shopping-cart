import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FILTER_PRODUCTS } from '../constants/ActionTypes'

const products = (state={}, action={}) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }

        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case FILTER_PRODUCTS:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state
    }
}


export default products
