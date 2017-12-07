import axios from 'axios'

export const userSignupRequest = (userInfo) => {
    return dispatch => {
        axios.post('/api/users/', userInfo)
    }
}
