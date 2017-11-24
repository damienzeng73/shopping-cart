import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import _ from 'lodash'

import Cart from '../components/Cart'
import { removeFromCart } from '../actions/Cart'

class CartPage extends React.Component {
    constructor(props) {
        super(props)

        this.handleRemoveItem = this.handleRemoveItem.bind(this)
    }

    handleRemoveItem(e, item) {
        e.stopPropagation()
        this.props.removeFromCart(item.id)
    }

    render() {
        let totalPrice = 0

        _.forEach(this.props.cart, (element) => {
            totalPrice += element.product.price * element.quantity
        })

        return (
            <div>
                <Cart cart={this.props.cart} handleRemoveItem={this.handleRemoveItem} />

                <Button
                    content='Total'
                    icon='dollar'
                    label={{ basic: true, pointing: 'left', content: totalPrice }}
                />

                <Button.Group floated='right'>
                    <Button primary as={Link} to='/'>Continue shopping</Button>
                    <Button.Or />
                    <Button color='red'>Place order</Button>
                </Button.Group>
            </div>
        )
    }
}

CartPage.propTypes = {
    cart: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}


export default withRouter(connect(mapStateToProps, { removeFromCart })(CartPage))
