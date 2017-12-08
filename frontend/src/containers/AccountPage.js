import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Account from '../components/Account'
import { login } from '../actions/Auth'
import { userSignupRequest } from '../actions/Account'

class AccountPage extends React.Component {
    render() {
        return (
            <Account
                login={this.props.login}
                userSignupRequest={this.props.userSignupRequest}
                history={this.props.history}
            />
        )
    }
}

AccountPage.propTypes = {
    login: PropTypes.func.isRequired,
    userSignupRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}


export default withRouter(connect(null, { login, userSignupRequest })(AccountPage))
