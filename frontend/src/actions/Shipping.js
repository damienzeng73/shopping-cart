import { SET_SHIPPING_OPTIONS } from '../constants/ActionTypes'

export const setShippingOptions = (data) => {
    return {
        type: SET_SHIPPING_OPTIONS,
        payload: data
    }
}
