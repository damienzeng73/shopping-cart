import { ADD_TO_CART } from '../constants/ActionTypes'

export const addToCart = (product, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {
            product: product,
            quantity: quantity
        }
    }
}
