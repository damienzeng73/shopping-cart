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
