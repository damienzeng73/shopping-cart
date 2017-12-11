import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Account from '../components/Account'
import { login, logout } from '../actions/Auth'
import { userSignupRequest } from '../actions/Account'

class AccountPage extends React.Component {
    render() {
        return (
            <Account
                login={this.props.login}
                logout={this.props.logout}
                userSignupRequest={this.props.userSignupRequest}
                history={this.props.history}
                auth={this.props.auth}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

AccountPage.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    userSignupRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}


export default withRouter(connect(mapStateToProps, { login, logout, userSignupRequest })(AccountPage))
