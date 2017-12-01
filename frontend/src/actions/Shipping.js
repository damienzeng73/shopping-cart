import { SET_SHIPPING_OPTIONS, CLEAR_SHIPPING_OPTIONS } from '../constants/ActionTypes'

export const setShippingOptions = (data) => {
    return {
        type: SET_SHIPPING_OPTIONS,
        payload: data
    }
}

export const clearShippingOptions = () => {
    return {
        type: CLEAR_SHIPPING_OPTIONS
    }
}
