import { SET_BILLING_OPTIONS, CLEAR_BILLING_OPTIONS } from '../constants/ActionTypes'

export const setBillingOptions = (data) => {
    return {
        type: SET_BILLING_OPTIONS,
        payload: data
    }
}

export const clearBillingOptions = () => {
    return {
        type: CLEAR_BILLING_OPTIONS
    }
}
