import { ADD_TO_CART } from '../constants/ActionTypes'
import shortid from 'shortid'

const cart = (state=[], action={}) => {
    switch(action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    product: action.payload.product,
                    quantity: action.payload.quantity
                }
            ]

        default:
            return state
    }
}


export default cart
