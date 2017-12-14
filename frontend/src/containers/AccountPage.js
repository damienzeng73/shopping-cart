import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

import Account from '../components/Account'
import { login, logout, userSignupRequest } from '../actions/Auth'
import { fetchOrders, updateProduct, addNewProduct, deleteProduct } from '../actions/Account'

class AccountPage extends React.Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.fetchOrders()
        }
    }

    componentWillReceiveProps(newProps) {
        if (!this.props.auth.isAuthenticated && newProps.auth.isAuthenticated) {
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
                products={this.props.products}
                updateProduct={this.props.updateProduct}
                addNewProduct={this.props.addNewProduct}
                deleteProduct={this.props.deleteProduct}
            />
        )
    }
}

const mapStateToProps = (state) => {
    let selfProducts = _.filter(state.products.data, (element) => {
        return element.owner === state.auth.user.username
    })

    return {
        auth: state.auth,
        orders: state.account.data,
        products: selfProducts
    }
}

AccountPage.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    userSignupRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    fetchOrders: PropTypes.func.isRequired,
    orders: PropTypes.array,
    products: PropTypes.array,
    updateProduct: PropTypes.func.isRequired,
    addNewProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired
}


export default withRouter(connect(mapStateToProps, { login, logout, userSignupRequest, fetchOrders, updateProduct, addNewProduct, deleteProduct })(AccountPage))
