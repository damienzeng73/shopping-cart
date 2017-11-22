import { combineReducers } from 'redux'
import products from './Products'
import cart from './Cart'

const rootReducers = combineReducers({
    products,
    cart
})


export default rootReducers
