import axios from 'axios'
import toastr from 'toastr'

import { TOASTR_OPTIONS } from '../constants/Common'
toastr.options = TOASTR_OPTIONS

export const userSignupRequest = (userInfo) => {
    return dispatch => {
        axios.post('/api/users/', userInfo)
            .then((res) => {
                toastr.success("Welcome! Your account is available now.")
            })
    }
}
