import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Account from '../components/Account'
import { login, logout } from '../actions/Auth'
import { userSignupRequest, fetchOrders } from '../actions/Account'

class AccountPage extends React.Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.fetchOrders()
        }
    }

    render() {
        return (
            <Account
                login={this.props.login}
                logout={this.props.logout}
                userSignupRequest={this.props.userSignupRequest}
                history={this.props.history}
                auth={this.props.auth}
                orders={this.props.orders}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        orders: state.account.data
    }
}

AccountPage.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    userSignupRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    fetchOrders: PropTypes.func.isRequired,
    orders: PropTypes.array
}


export default withRouter(connect(mapStateToProps, { login, logout, userSignupRequest, fetchOrders })(AccountPage))
