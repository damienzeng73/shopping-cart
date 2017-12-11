import React from 'react'
import PropTypes from 'prop-types'
import { Step, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import toastr from 'toastr'

import Cart from '../components/Cart'
import Shipping from '../components/Shipping'
import Billing from '../components/Billing'
import Confirmation from '../components/Confirmation'
import { removeFromCart, clearCart, placeOrder } from '../actions/Cart'
import { setShippingOptions } from '../actions/Shipping'
import { setBillingOptions } from '../actions/Billing'
import { TOASTR_OPTIONS } from '../constants/Common'
toastr.options = TOASTR_OPTIONS

class CartPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1
        }

        this.nextStep = this.nextStep.bind(this)
        this.previousStep = this.previousStep.bind(this)
        this.submit = this.submit.bind(this)
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
        this.showStep = this.showStep.bind(this)
    }

    nextStep() {
        this.setState({ step: this.state.step + 1 })
    }

    previousStep() {
        this.setState({ step: this.state.step - 1 })
    }

    submit() {
        if (!this.props.auth.isAuthenticated) {
            toastr.warning("You have to login first to make an order.")
            this.props.history.push('/account')
        } else {
            this.props.placeOrder(this.props.cart, this.props.shipping.data, this.props.billing.data)
            this.props.history.push('/')
        }
    }

    handleRemoveItem(e, item) {
        e.stopPropagation()
        this.props.removeFromCart(item.id)
    }

    showStep() {
        switch (this.state.step) {
            case 1:
                return <Cart
                            cart={this.props.cart}
                            nextStep={this.nextStep}
                            handleRemoveItem={this.handleRemoveItem}
                            clearCart={this.props.clearCart}
                        />

            case 2:
                return <Shipping
                            shipping={this.props.shipping}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            setShippingOptions={this.props.setShippingOptions}
                        />

            case 3:
                return <Billing
                            billing={this.props.billing}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            setBillingOptions={this.props.setBillingOptions}
                        />

            case 4:
                return <Confirmation
                            cart={this.props.cart}
                            shipping={this.props.shipping}
                            billing={this.props.billing}
                            previousStep={this.previousStep}
                            submit={this.submit}
                        />

            default:
                return
        }
    }

    render() {
        return (
            <div>
                <Step.Group attached='top'>
                    <Step active={this.state.step === 1}>
                        <Icon name='shopping cart' />
                        <Step.Content>
                            <Step.Title>Confirm items</Step.Title>
                        </Step.Content>
                    </Step>

                    <Step active={this.state.step === 2}>
                        <Icon name='truck' />
                        <Step.Content>
                            <Step.Title>Shipping</Step.Title>
                            <Step.Description>Choose your shipping options</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step active={this.state.step === 3}>
                        <Icon name='payment' />
                        <Step.Content>
                            <Step.Title>Billing</Step.Title>
                            <Step.Description>Enter billing information</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step active={this.state.step === 4}>
                        <Icon name='info circle' />
                        <Step.Content>
                            <Step.Title>Confirm Order</Step.Title>
                            <Step.Description>Verify order details</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>

                {this.showStep()}
            </div>
        )
    }
}

CartPage.propTypes = {
    cart: PropTypes.array.isRequired,
    shipping: PropTypes.object.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    setShippingOptions: PropTypes.func.isRequired,
    setBillingOptions: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    placeOrder: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        shipping: state.shipping,
        billing: state.billing,
        auth: state.auth
    }
}


export default withRouter(connect(mapStateToProps, { removeFromCart, setShippingOptions, setBillingOptions, clearCart, placeOrder })(CartPage))
