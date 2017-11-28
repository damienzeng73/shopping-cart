import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/ActionTypes'
import shortid from 'shortid'
import _ from 'lodash'

const cart = (state=[], action={}) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (_.filter(state, (obj) => obj.product.name === action.payload.product.name).length > 0) {
                let newState = state.slice()
                for (let i=0; i<newState.length; i++) {
                    if (newState[i].product.name === action.payload.product.name) {
                        newState[i].quantity += action.payload.quantity
                    }
                }

                return newState
            }

            return [
                ...state,
                {
                    id: shortid.generate(),
                    product: action.payload.product,
                    quantity: action.payload.quantity
                }
            ]

        case REMOVE_FROM_CART:
            let idx = _.findIndex(state, { id: action.payload.id })
            if (idx >= 0) {
                return [
                    ...state.slice(0, idx),
                    ...state.slice(idx + 1)
                ]
            }

            return state

        case CLEAR_CART:
            return []

        default:
            return state
    }
}


export default cart
