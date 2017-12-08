import _ from 'lodash'

import { LOGIN_SUCCESS } from '../constants/ActionTypes'

const initialState = {
    isAuthenticated: false,
    user: {}
}

const auth = (state=initialState, action={}) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                isAuthenticated: !_.isEmpty(action.payload),
                user: action.payload
            }

        default:
            return state
    }
}


export default auth
