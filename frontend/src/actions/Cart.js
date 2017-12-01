import _ from 'lodash'
import axios from 'axios'

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/ActionTypes'
import { clearShippingOptions } from './Shipping'
import { clearBillingOptions } from './Billing'

export const addToCart = (product, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {
            product: product,
            quantity: quantity
        }
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id: id
        }
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const placeOrder = (items, shippingData, billingData) => {
    return dispatch => {
        dispatch(clearCart())
        if (shippingData.rememberDetails !== true) {
            dispatch(clearShippingOptions())
        }
        dispatch(clearBillingOptions())

        _.forEach(items, (element) => {
            let updatedQuantity = element.product.quantity - element.quantity
            axios.put(`/api/products/${element.product.id}/`, {category: element.product.category, name: element.product.name, price: element.product.price, quantity: updatedQuantity})
        })
    }
}
