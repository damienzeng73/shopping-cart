import _ from 'lodash'
import axios from 'axios'

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/ActionTypes'

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

export const placeOrder = (items, shippingMethod, billingMethod) => {
    return dispatch => {
        dispatch(clearCart())
        _.forEach(items, (element) => {
            let updatedQuantity = element.product.quantity - element.quantity
            axios.put(`/api/products/${element.product.id}/`, {category: element.product.category, name: element.product.name, price: element.product.price, quantity: updatedQuantity})
        })
    }
}
