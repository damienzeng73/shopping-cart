import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ProductList from '../components/ProductList'
import { fetchProducts } from '../actions/Products'
import { addToCart } from '../actions/Cart'

class ShoppingPage extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.fetchProducts()
        }, 300)
    }

    render() {
        return (
            <ProductList products={this.props.products} addToCart={this.props.addToCart} />
        )
    }
}

ShoppingPage.propTypes = {
    products: PropTypes.array,
    fetchProducts: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products.data
    }
}


export default withRouter(connect(mapStateToProps, { fetchProducts, addToCart })(ShoppingPage))
