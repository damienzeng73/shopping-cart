import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Account from '../components/Account'
import { userSignupRequest } from '../actions/Account'

class AccountPage extends React.Component {
    render() {
        return (
            <Account
                userSignupRequest={this.props.userSignupRequest}
            />
        )
    }
}

AccountPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}


export default withRouter(connect(null, { userSignupRequest })(AccountPage))
