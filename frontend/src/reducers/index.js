import { combineReducers } from 'redux'
import products from './Products'
import cart from './Cart'
import shipping from './Shipping'
import billing from './Billing'

const rootReducers = combineReducers({
    products,
    cart,
    shipping,
    billing
})


export default rootReducers
