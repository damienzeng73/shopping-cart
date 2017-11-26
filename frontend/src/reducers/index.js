import { combineReducers } from 'redux'
import products from './Products'
import cart from './Cart'
import shipping from './Shipping'

const rootReducers = combineReducers({
    products,
    cart,
    shipping
})


export default rootReducers
