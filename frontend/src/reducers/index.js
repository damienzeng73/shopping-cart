import { combineReducers } from 'redux'

import products from './Products'
import cart from './Cart'
import shipping from './Shipping'
import billing from './Billing'
import auth from './Auth'
import account from './Account'

const rootReducers = combineReducers({
    products,
    cart,
    shipping,
    billing,
    auth,
    account
})


export default rootReducers
